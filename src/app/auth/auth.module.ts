import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CallbackComponent } from './callback/callback.component';

import { EnforcePasswordPolicyDirective } from './register/enforce-password-policy.directive';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        CallbackComponent,
        EnforcePasswordPolicyDirective
    ],
    providers: [AuthService, AuthGuard]
})
export class AuthModule { }
