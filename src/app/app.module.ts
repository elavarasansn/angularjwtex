import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule,HTTP_INTERCEPTORS } from  '@angular/common/http';
import {AuthService} from "./service/auth.service";
import {JwtinterceptorService} from "./service/jwtinterceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
