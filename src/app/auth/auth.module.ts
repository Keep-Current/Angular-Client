import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthService } from './auth.service';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    providers: [AuthService]
})
export class AuthModule { }
