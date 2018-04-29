import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAreaCenterComponent } from './user-area-center.component';
import { UserAreaNavBarComponent } from './user-area-navbar.component';

import { UserAreaRoutingModule } from './user-area-routing.module';

import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    UserAreaRoutingModule
  ],
  declarations: [UserAreaCenterComponent, UserAreaNavBarComponent, ProfileComponent],
  providers: []
})
export class UserAreaModule { }
