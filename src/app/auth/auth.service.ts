import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AUTH_CONFIG } from './auth0-variables';
import { isDevMode } from '@angular/core';

import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  userProfile: any;

  auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    redirectUri: isDevMode() ? AUTH_CONFIG.callbackUrlDev : AUTH_CONFIG.callbackUrlProd,
    scope: 'openid'
  });

  constructor(public router: Router) { }

  public login(username: string, password: string): void {
    this.auth0.login({
      realm: 'Username-Password-Authentication',
      username,
      password
    }, (err, authResult) => {
      if (err) {
        console.log(err);
        alert(`Error: ${err.errorDescription}. Check the console for further details.`);
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
        alert(`Error: ${err.description}. Check the console for further details.`);
        return;
      }
    });
  }

  public loginWithGoogle(): void {
    this.auth0.authorize({
      connection: 'google-oauth2',
    });
  }

  public loginWithGithub(): void {
    this.auth0.authorize({
      connection: 'github-oauth2',
    });
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/dashboard']);
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
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
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
}
