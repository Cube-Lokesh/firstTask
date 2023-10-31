import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralSigninComponent } from './general-signin/general-signin.component';
import { Router } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateuserComponent } from './createuser/createuser.component'

@NgModule({
  declarations: [
    AppComponent,
    GeneralSigninComponent,
    HomePageComponent,
    ForgetPassComponent,
    RegisterComponent,
    HomepageComponent,
    PagenotfoundComponent,
    CreateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
