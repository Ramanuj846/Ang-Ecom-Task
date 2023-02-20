import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerFrom: FormGroup;
  submitted:boolean = false;
  constructor(private router:Router,
    private formBuilder:FormBuilder,
    private userdataService:UserDataService) {
      this.registerFrom = this.formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        emailAddress: ['', [Validators.required]],
        password: ['', Validators.required],
        // confirmPassword: ['', Validators.required]

      },
      // {
      //   validators: this.MustMatch('password','confirmPassword')
      // }
      )
     }

  ngOnInit(): void {
  }

  // MustMatch(contolName:string,matchingControlName:string)
  // {
  //   return (formGroup:FormGroup)=>{
  //     const control = formGroup.controls[contolName];
  //     const matchingControl = formGroup.controls[matchingControlName]
  //     if(matchingControl.errors && !matchingControl.errors.MustMatch){
  //       return
  //     }

  //     if(control.value ! == matchingControl.value)
  //     {
  //       matchingControl.setErrors({MustMatch:true})
  //     }
  //     else
  //     {
  //       matchingControl.setErrors(null)
  //     }
  //   }
   
  // }


  get f()
  {
    return this.registerFrom.controls
  }

  toLoginPage()
  {
    this.router.navigate(['/login']);
  }

  resetUser()
  {
    this.registerFrom.reset();
  }

  registerUser()
  {
    this.submitted = true;
    if(this.registerFrom.invalid)
    {
      return
    }
    else{
      this.userdataService.createUser((this.registerFrom.value)).subscribe((res:any)=>{
        alert("Data Created Sucessfully");
        this.registerFrom.reset();
      },(error)=>
      {
        alert(error);
      })

    }
   
  }



}
