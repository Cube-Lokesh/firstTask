import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule,Validators,ValidatorFn,ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-general-signin',
  templateUrl: './general-signin.component.html',
  styleUrls: ['./general-signin.component.scss']
})
export class GeneralSigninComponent implements OnInit {

  constructor() {
   
   }
   public e=false;
   public error;
   submitted(signinForm)
    {
      if (signinForm.invalid) {
        this.error="Please Enter All Fields";
        this.e=true;
      }
      else
      {
        this.e=false;
        console.log(signinForm.value.email);
      console.log(signinForm.value.pwd);
      }
    }

    showError(signinForm)
    {
      if(signinForm.valid)
      {

      }
    }
  ngOnInit() {

    
    
  }

}
