import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private http: HttpClient,private r : Router,private httpheaders: HttpHeaders) {
    
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
      ),
      'job_des' : new FormControl(
        '',[Validators.required]
      )
    })
   }

   
  public e=false;
  public error;
  public signUp;
  postData(): void
  {
    if(this.registerForm.invalid)
    {
      this.e=true;
      this.error="Please fill the All required fields";
    }
    else
    {
      var channel="ADMIN";
      var email=this.registerForm.value.email;
      var jobDescription=this.registerForm.value.job_des;
      var mobileNumber=this.registerForm.value.mnum;
      var name=this.registerForm.value.uname;
      var password=this.registerForm.value.pwd;
      var reportingManagerId="61ed62fb3e08c401f0d71bfa";
      var roadRoles ={"61d305b0895e77083aeb40d6": ["61ed63e63e08c401f0d71e39"]}
      console.log(this.registerForm.value);

      var obj=
      {
        allRoads : false,
        channel:"ADMIN",
        email:this.registerForm.value.email,
        enableTracking:false,
        jobDescription:this.registerForm.value.job_des,
        mobileNumber:this.registerForm.value.mnum,
        name:this.registerForm.value.uname,
        password:this.registerForm.value.pwd,
        reportingManagerId:"61ed62fb3e08c401f0d71bfa",
        roadRoles : {"61d305b0895e77083aeb40d6": ["61ed63e63e08c401f0d71e39"]}
      }

      /*let headers = new httpheaders({
        'authorization' : `bearer e33e18e7-caf3-4467-9f6d-88112f91489c`
      });*/
      
       /* this.http.post<any>("http://172.18.1.22:3000/api/v3/createUser",obj)
        .subscribe(res=>{
          alert('SIGNIN SUCCESFUL');
          this.registerForm.reset()
          this.r.navigate(['/general-signin'])
        },err=>{
          alert("Something went wrong")
        })
      */
    }
  }

  ngOnInit() {
  }

}
