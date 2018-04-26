import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HowComponent } from './how/how.component';
import { AboutUsComponent } from './about-us/about-us.component';

const authRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'how', component: HowComponent },
    { path: 'about', component: AboutUsComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PublicRoutingModule { }
