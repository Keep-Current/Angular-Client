import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HowComponent } from './how/how.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { HomeScriptResolver } from './home/home.resolve.service';

const authRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        resolve: {
            script: HomeScriptResolver
        }
    },
    { path: 'how', component: HowComponent },
    { path: 'about', component: AboutUsComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        HomeScriptResolver
    ]
})
export class PublicRoutingModule { }
