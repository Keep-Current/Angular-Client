import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) { }

  email: string;
  password: string;
  remember: string;

  ngOnInit() {
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

  login() {
    this.auth.login(this.email, this.password);
  }
}
