import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent  implements OnInit{

islogin:boolean=false;

constructor(private _authService:AuthService){
 

}




  ngOnInit(): void {
  //   const token= localStorage.getItem("userToken");
  //  if(token){
  //   this.islogin=true;
  //  }
  //  else{
  //   this.islogin=false;
  //  }
  
   
    
 this._authService.userData.subscribe({
      next:()=>{
        if(this._authService.userData.getValue != null){
          this.islogin=true;
      
        }
        else{
          this.islogin=false;
        }
      },
      error:()=>{}
      
    })
    // if(this._authService.userData){
    //   this.islogin=true;

    // }
    // else{
    //   this.islogin=false;
    // }
    
  }

  signOut(){
    this._authService.signOut();
    // this.islogin=false;
  }

 


  

}
