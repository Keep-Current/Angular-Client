import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAreaCenterComponent } from './user-area-center.component';
import { UserAreaNavBarComponent } from './user-area-navbar.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthGuard } from '../auth/auth-guard.service';

const userAreaRoutes: Routes = [
  {
    path: 'user',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [{
          path: '',
          component: ProfileComponent
        }]
      },
      // { path: 'edit', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userAreaRoutes)],
  exports: [RouterModule]
})
export class UserAreaRoutingModule { }
