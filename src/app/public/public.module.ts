import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowComponent } from './how/how.component';

import { ScriptService } from './script.service';

import { PublicRoutingModule } from './public-routing.module';
import { SlickModule } from 'ngx-slick';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PublicRoutingModule,
        SlickModule.forRoot()
    ],
    declarations: [
        HomeComponent,
        AboutUsComponent,
        HowComponent
    ],
    providers: [ScriptService]
})
export class PublicModule { }
