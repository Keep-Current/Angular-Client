import { Injectable } from '@angular/core';

export interface IAlert {
  id?: number;
  type: string;
  message: string;
}

@Injectable()
export class AlertService {

  public alerts: Array<IAlert> = [];

  constructor() { }

  public removeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  public addAlert(alert: IAlert) {
    alert.id = this.alerts.length + 1;
    this.alerts.push(alert);
  }

}
