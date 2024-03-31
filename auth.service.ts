import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject} from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { json } from 'stream/consumers';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient:HttpClient, private _router:Router) { 
    // if(localStorage.getItem('userToken')!=null){
    //   this.saveUserData();
    // }
  }


  userData:any = new BehaviorSubject(null);//have 2 method getValue and to give value

  saveUserData(){
    //get token fron local storage 
    //decode
    let encodedtoken=JSON.stringify( localStorage.getItem('userToken'));
   let decodedToken = jwtDecode(encodedtoken);
   this.userData.next(decodedToken);
   console.log(this.userData);
  }



  signOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._router.navigate(['/register']);
  
  }
  signUp(userData:object):Observable<any>{
    return this._httpClient.post('https://e-commerce-aibk.onrender.com/api/v1/users/login/',userData);
  }
  // signin(userData:object):Observable<any>{
  //   return this._httpClient.post('https://route-egypt-api.herokuapp.com/signin/',userData);
  // }
}
