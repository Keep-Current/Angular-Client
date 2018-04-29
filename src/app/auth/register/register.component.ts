import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { UserRegistration } from './user-registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public auth: AuthService) { }

  model = new UserRegistration(0, '', '', '');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.auth.signup(this.model.email, this.model.password);
  }

  ngOnInit() {
  }
}
