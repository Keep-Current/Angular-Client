import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';

import { ScriptService } from '../script.service';

@Injectable()
export class HomeScriptResolver implements Resolve<any> {
    constructor(private script: ScriptService) { }

    resolve(): Observable<any> {

        return Observable.create((observer: any) => {
            this.script.load('slick').then((data: any) => {
                console.log('script loaded ', data);
                observer.next(data);
                observer.complete();
            }).catch((error: any) => {
                console.log(error);
                observer.error(error);
            });

        });
    }
}
