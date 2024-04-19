import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
// import { Router } from 'express';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import swal from 'sweetalert';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  constructor(private _authService:AuthService,private _router:Router){
    

  }

  ngOnInit(): void {
    
  }

registerForm:FormGroup= new FormGroup({
  // first_name:new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  // last_name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
  // age:new FormControl(null ,[Validators.min(16),Validators.max(90),Validators.required]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z a-z]/)])

})
islogin:boolean=false;



submitRegisterForm(registerForm:FormGroup){
  // console.log(registerForm.get('first_name'));
  // console.log(registerForm.get("first_name")?.errors);
  // console.log(registerForm.get("first_name")?.getError("required"));
  // console.log(registerForm.get("first_name")?.errors);

  this.isloadind=true;



  this._authService.signUp(registerForm.value).subscribe({
    next:(response)=>{ //هنا بترجع الريسبونس نفسها
      console.log(response);
      this.isloadind=false;
      if(response.status==="success"){ 
      localStorage.setItem('userToken',response.token);
      this._authService.saveUserData();
      this.islogin=true;

      this._router.navigate(['/about'])//مسدج ديه جوا الاوبجكت نفسه
      console.log(response.status);
      // console.log(response.token) //navigate take array
      }
      else{
       
        this.error=response.message;
        // console.log(response.status)

      }
      
    },
    error:(r)=>{

      Swal.fire(r.error.message+''+'ur not admin');

      // console.log(r.error.message+''+'ur not admin')
    
    }

  });

  


}





error:String='';
isloadind:boolean=false;

registerForm2:FormGroup= new FormGroup({
  first_name:new FormControl(null),
  last_name:new FormControl(null),
  age:new FormControl(null),
  email:new FormControl(null),
  password:new FormControl(null)

})

  

  

}
