import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Keep Current';
  url = '';

  constructor(public auth: AuthService, private router: Router) {
    auth.handleAuthentication();
    auth.scheduleRenewal();

    router.events.subscribe((val) => {
      this.url = router.url;
    });
  }

  getMainClass() {
    if (this.url === '/' || this.url === '/home') {
      return 'home-fullscreen';
    }
  }
}
