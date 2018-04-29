import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import { timer } from 'rxjs/observable/timer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AUTH_CONFIG } from './auth0-variables';
import { isDevMode } from '@angular/core';
import { AlertService } from '../alert/alert.service';

import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  userProfile: any;
  redirectUrl: string;
  refreshSubscription: any;

  auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    redirectUri: isDevMode() ? AUTH_CONFIG.callbackUrlDev : AUTH_CONFIG.callbackUrlProd,
    scope: 'openid email'
  });

  constructor(public router: Router, public alert: AlertService) {}

  public login(username: string, password: string): void {
    this.auth0.login({
      realm: 'Username-Password-Authentication',
      username,
      password,
    }, (err, authResult) => {
      if (err) {
        console.log(err);
        this.alert.addAlert({
          type: 'warning',
          message: `Error: ${err.error} - ${err.description}.`,
        });
        return;
      } else if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      }
    });
  }

  public signup(email: string, password: string): void {
    this.auth0.redirect.signupAndLogin({
      connection: 'Username-Password-Authentication',
      email,
      password,
    }, err => {
      if (err) {
        console.log(err);
        this.alert.addAlert({
          type: 'warning',
          message: `Error: ${err.error} - ${err.description}.`,
        });
        return;
      }
    });
  }

  public loginWithGoogle(): void {
    const state = btoa(this.getSalt());
    this.auth0.authorize({
      connection: 'google-oauth2',
      // state: state
    });
  }

  public loginWithGithub(): void {
    const state = btoa(this.getSalt());
    this.auth0.authorize({
      connection: 'github-oauth2',
      // state: state
    });
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);

        if (this.redirectUrl) {
          this.router.navigate([this.redirectUrl]);
        } else {
          this.router.navigate(['/user']);
        }
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult: any): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    this.scheduleRenewal();
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    this.unscheduleRenewal();
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public getProfile(cb: any): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access Token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  /**
   * Token renewal
   */

  public renewToken() {
    this.auth0.checkSession({}, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        this.setSession(result);
      }
    });
  }

  public scheduleRenewal() {
    if (!this.isAuthenticated()) {
      return;
    }
    this.unscheduleRenewal();

    const expiresAt = JSON.parse(window.localStorage.getItem('expires_at'));

    const source = Observable.of(expiresAt).flatMap(
      newExpiresAt => {

        const now = Date.now();

        // Use the delay in a timer to
        // run the refresh at the proper time
        return timer(Math.max(1, newExpiresAt - now));
      });

    // Once the delay time from above is
    // reached, get a new JWT and schedule
    // additional refreshes
    this.refreshSubscription = source.subscribe(() => {
      this.renewToken();
      this.scheduleRenewal();
    });
  }

  public unscheduleRenewal() {
    if (!this.refreshSubscription) {
      return;
    }
    this.refreshSubscription.unsubscribe();
  }

  private getSalt(): string {
    let salt = localStorage.getItem('state');
    if (!salt) {
      salt = this.generateSalt(10);
      localStorage.setItem('state', salt);
    }
    return salt;
  }

  private generateSalt(len: number): string {
    return Array.apply(0, Array(len)).map(function () {
      return (function (charset) {
        return charset.charAt(Math.floor(Math.random() * charset.length));
      }('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'));
    }).join('');
  }
}
