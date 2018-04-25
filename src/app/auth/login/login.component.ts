import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

  loginWithGithub() {
    this.auth.loginWithGithub();
  }

  login(email: string, password: string, remember: boolean) {
    this.auth.login(email, password);
  }
}
