import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    
    this.registerForm = formBuilder.group({
      'email' : new FormControl(
        '',[Validators.required,Validators.email]
      ),
      'mnum' : new FormControl(
        '',[Validators.required,Validators.minLength(10)]
      ),
      'uname' : new FormControl(
        '',[Validators.required]
      ),
      'pwd' : new FormControl(
        '',[Validators.required,Validators.minLength(8),Validators.pattern('')]
      )
    })
   }

   
  public e=false;
  public error;
  
  postData(): void
  {
    if(this.registerForm.invalid)
    {
      this.e=true;
      this.error="Please fill the All required fields";
    }
    else
    {
      console.log(this.registerForm.value);
    }
    this.registerForm.reset();
  }
  ngOnInit() {
    
  }

}
