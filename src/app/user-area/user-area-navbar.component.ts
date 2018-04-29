import { Component } from '@angular/core';

@Component({
  template: `
    <nav>
      <a routerLink="./" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
        <a routerLink="./topic" routerLinkActive="active">Topics</a>
        <a routerLink="./recommended" routerLinkActive="active">Recommendations</a>
        <a routerLink="./saved" routerLinkActive="active">Saved Documents</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class UserAreaNavBarComponent { }
