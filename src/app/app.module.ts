import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { PublicModule } from './public/public.module';
import { UserAreaModule } from './user-area/user-area.module';
import { TopicModule } from './topic/topic.module';

import { PageNotFoundComponent } from './not-found.component';
import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [PageNotFoundComponent, AppComponent, AlertComponent],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    UserAreaModule,
    TopicModule,
    PublicModule,
    AppRoutingModule,
    BrowserAnimationsModule],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
