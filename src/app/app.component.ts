import { Component } from '@angular/core';
import { GeneralSigninComponent } from './general-signin/general-signin.component';
import { Router } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateuserComponent } from './createuser/createuser.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MIS';
  
}
