import { Input, Component } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {

  constructor(public alerts: AlertService) {
  }

  public closeAlert(alert: IAlert) {
    this.alerts.removeAlert(alert);
  }
}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
