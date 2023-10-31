import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralSigninComponent } from './general-signin/general-signin.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateuserComponent } from './createuser/createuser.component';


const routes: Routes = [
  {
    path:'',component:HomePageComponent
  },
  {
    path:'general-signin',
    component:GeneralSigninComponent
  },
  {
    path:'signin',component:GeneralSigninComponent
  },
  {
    path:'forget-pass',component:ForgetPassComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'mainhomepage', component: HomepageComponent
  },
  {
    path:'createuser',component: CreateuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
