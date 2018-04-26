import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { PublicModule } from './public/public.module';

import { PageNotFoundComponent } from './not-found.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [PageNotFoundComponent, AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AuthModule, PublicModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
