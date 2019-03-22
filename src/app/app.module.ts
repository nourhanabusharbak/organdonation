import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceCenterComponent } from './service-center/service-center.component';
import { CustomerComponent } from './customer/customer.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormsModule } from '@angular/forms';


import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';


@NgModule({
  declarations: [
    AppComponent,
    ServiceCenterComponent,
    CustomerComponent,
    HeaderComponent,
    LoginPageComponent,
    SignupPageComponent,
    HomePageComponent,
    AboutUsComponent
  ],
  imports: [
   BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,HttpClientModule, AngularSvgIconModule,FormsModule,
     AngularFireModule.initializeApp(environment.firebase),AngularFireAuthModule,AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
