import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { error } from 'console';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})


export class MoviesService {

  constructor(private _httpClient:HttpClient) { }

     getMovieDetails(id:string,media_type:string):Observable<any>{
  return this._httpClient.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=95ce63358444b9d594af368525e28aba&language=en-US`);
  
}

  getMovies(m:string):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/${m}/day?api_key=95ce63358444b9d594af368525e28aba`);


  }

  // getProducts():Observable<any>{

  //   const token= localStorage.getItem("userToken");
  //   if(token){
  //     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  //     return this._httpClient.get(`https://e-commerce-aibk.onrender.com/api/v1/admin/products`,{headers});


  //   }

  // }


  getProducts(): Observable<any> {
    const token = localStorage.getItem("userToken");
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this._httpClient.get('https://e-commerce-aibk.onrender.com/api/v1/admin/products', { headers })
        .pipe(
          catchError(error => {
            // Handle the error here, log it or do other actions if necessary
            console.error('Error fetching products:', error);
            // Forward the error by returning an observable that emits the error
            return throwError(error);
          })
        );
    } else {
      // If token is not available, return an observable with an error message
      return throwError("User token not found in local storage");
    }
  }
  // getCategories(): Observable<any> {
  //   const token = localStorage.getItem("userToken");
  //   if (token) {
  //     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //     return this._httpClient.get('https://e-commerce-aibk.onrender.com/api/v1/admin/categories', { headers })
  //       .pipe(
  //         catchError(error => {
  //           // Handle the error here, log it or do other actions if necessary
  //           console.error('Error fetching products:', error);
  //           // Forward the error by returning an observable that emits the error
  //           return throwError(error);
  //         })
  //       );
  //   } else {
  //     // If token is not available, return an observable with an error message
  //     return throwError("User token not found in local storage");
  //   }
  // }

  getCategories(): Observable<any> {
    const token = localStorage.getItem("userToken");
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this._httpClient.get('https://e-commerce-aibk.onrender.com/api/v1/admin/products', { headers })
        .pipe(
          catchError(error => {
            // Handle the error here, log it or do other actions if necessary
            console.error('Error fetching products:', error);
            // Forward the error by returning an observable that emits the error
            return throwError(error);
          })
        );
    } else {
      // If token is not available, return an observable with an error message
      return throwError("User token not found in local storage");
    }
  }
  getUsers(): Observable<any> {
    const token = localStorage.getItem("userToken");
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this._httpClient.get('https://e-commerce-aibk.onrender.com/api/v1/admin/users', { headers })
        .pipe(
          catchError(error => {
            // Handle the error here, log it or do other actions if necessary
            console.error('Error fetching products:', error);
            // Forward the error by returning an observable that emits the error
            return throwError(error);
          })
        );
    } else {
      // If token is not available, return an observable with an error message
      return throwError("User token not found in local storage");
    }
  }
  getOrders(): Observable<any> {
    const token = localStorage.getItem("userToken");
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this._httpClient.get('https://e-commerce-aibk.onrender.com/api/v1/admin/orders', { headers })
        .pipe(
          catchError(error => {
            // Handle the error here, log it or do other actions if necessary
            console.error('Error fetching products:', error);
            // Forward the error by returning an observable that emits the error
            return throwError(error);
          })
        );
    } else {
      // If token is not available, return an observable with an error message
      return throwError("User token not found in local storage");
    }
  }



  addproduct(productData:FormData):Observable<any>{
    const token = localStorage.getItem("userToken");
   if (token) {
    
     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
     const headersOptions = { headers: headers };

     return this._httpClient.post('https://e-commerce-aibk.onrender.com/api/v1/products',productData, headersOptions)
       .pipe(
         catchError(error => {
           console.error('Error fetching products:', error);
           return throwError(error);
         })
       );
   } else {
     return throwError("User token not found in local storage");
   }

  

   }

   getProductById(id:string):Observable<any>{

    return this._httpClient.get(`https://e-commerce-aibk.onrender.com/api/v1/products/${id}`);

   }

  //  getMovieDetails(id:string,media_type:string):Observable<any>{
  //   return this._httpClient.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=95ce63358444b9d594af368525e28aba&language=en-US`);
    
  // }
  
   updateProduct(id:string,productData:FormData):Observable<any>{
    const token = localStorage.getItem("userToken");
   if (token) {
    
     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
     const headersOptions = { headers: headers };

     return this._httpClient.patch(`https://e-commerce-aibk.onrender.com/api/v1/products/${id}`,productData, headersOptions)
       .pipe(
         catchError(error => {
           console.error('Error fetching products:', error);
           return throwError(error);
         })
       );
   } else {
     return throwError("admin token not found in local storage");
   }

  

   }
   DeleteProduct(id:string){
    const token = localStorage.getItem("userToken");
   if (token) {
    
     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
     const headersOptions = { headers: headers };

     return this._httpClient.delete(`https://e-commerce-aibk.onrender.com/api/v1/products/${id}`,headersOptions)
       .pipe(
         catchError(error => {
           console.error('Error fetching products:', error);
           return throwError(error);
         })
       );
   } else {
     return throwError("admin token not found in local storage");
   }
   }
















  // addproduct(productData: FormData): Observable<any> {
  //   const token = localStorage.getItem("userToken");
  //   if (token) {
  //     console.log(token);
  //     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //     const url = 'https://e-commerce-aibk.onrender.com/api/v1/products';
      
  //     return this._httpClient.post(url, productData, { headers })
  //       .pipe(
  //         catchError(error => {
  //           console.error('Error fetching products:', error);
  //           return throwError(error);
  //         })
  //       );
  //   } else {
  //     return throwError("User token not found in local storage");
  //   }
  // }
//   addproduct(productData: FormData): Observable<any> {
//     const token = localStorage.getItem("userToken");
//     if (token) {
//         const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
//         const url = 'https://e-commerce-aibk.onrender.com/api/v1/products';
      
//         return this._httpClient.post(url, productData, { headers }).pipe(
//             catchError(error => {
//                 console.error('Error adding product:', error);
//                 return throwError(error);
//             })
//         );
//     } else {
//         return throwError("User token not found in local storage");
//     }
// }
  
}
