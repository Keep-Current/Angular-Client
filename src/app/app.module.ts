import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

import { PageNotFoundComponent } from './not-found.component';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [PageNotFoundComponent, AppComponent, AboutUsComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AuthModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
