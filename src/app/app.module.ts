import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppService } from "./app.service";
import {AppGuard} from './app.guard';
import {Approutes} from './app.route';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { ParentLoginComponent } from './parent.login/parent.login.component';
import { AdminLoginComponent } from './admin.login/admin.login.component';


@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    LoginComponent,
    ParentLoginComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    Approutes,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppGuard,AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
