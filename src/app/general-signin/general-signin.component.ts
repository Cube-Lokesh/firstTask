import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule,Validators,ValidatorFn,ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-general-signin',
  templateUrl: './general-signin.component.html',
  styleUrls: ['./general-signin.component.scss']
})
export class GeneralSigninComponent implements OnInit {

  public getJsonValue : any;
  
  constructor(private http: HttpClient,private r : Router,private loginservice: LoginServiceService) {
    
   }
   public e=false;
   public error;
   public x;
   submitted(signinForm)
    {
      if (signinForm.invalid) {
        this.error="Please Enter All Fields";
        this.e=true;
      }
      else
      {   
        this.x="true";
        this.http.post<any>("http://172.18.1.22:3000/api/v3/login", {
          channel
            :
            "ADMIN",
          deviceType
            :
            "WEB",
          mobileNumber
            :
            signinForm.value.mnum,
          password
            :
            signinForm.value.pwd
        }).subscribe(data => {
          
          this.r.navigate(['./mainhomepage']);
          }, err => {
            alert(`Something went wrong, ${err}`);
          });
      }
      if(this.x===true)
      {
          
      }
    }

  ngOnInit() {

    
    
  }
}
