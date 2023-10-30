import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule,ValidationErrors,Validators,ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.scss']
})
export class ForgetPassComponent implements OnInit {

  constructor() { }

  public error;
  public e=false;
  forget(forgetpass)
  {
    console.log(forgetpass.value.mnum);
    if (forgetpass.invalid) {
      this.error="Please Enter All Fields";
      this.e=true;
    }
    else
    {
      this.e=false;
      console.log(forgetpass.value.mnum);
    }
  }
  ngOnInit() {
  }

}
