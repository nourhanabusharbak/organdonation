import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceCenterComponent }      from './service-center/service-center.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';

 
 
const routes : Routes = [
  { path: '', redirectTo: 'OrganDonationSystem' ,pathMatch:'full' },{path: 'Admin', component: ServiceCenterComponent },{ path: 'customer', component: CustomerComponent },
  { path: 'login', component: LoginPageComponent },{ path: 'signup', component: SignupPageComponent },
  { path: 'OrganDonationSystem', component: HomePageComponent },{ path: 'AboutUs', component: AboutUsComponent },
];

@NgModule({
  exports: [ RouterModule, ],
 
  imports: [ RouterModule.forRoot(routes) ],
 

})



export class AppRoutingModule {}