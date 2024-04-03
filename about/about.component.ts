import { Component, OnInit } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { NavigationExtras } from '@angular/router';
import { strict } from 'assert';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {


  constructor(private _movieService:MoviesService,private _router:Router){

  }



  AllProductsForAdmin:any[]=[];

goToAddProduct(){
  this._router.navigate([`/addform`]);
}
// UpdateProduct(id:string){
//   this._router.navigate(['/update']);
// }

  ngOnInit(): void {
    
    this._movieService.getProducts().subscribe({

      next:(response)=>{this.AllProductsForAdmin=response.data.products
      
      console.log(response),
    console.log(this.AllProductsForAdmin);},
      error:()=>{}
    })
    

   
  }

  Del(id:string,event:any){
    this._movieService.DeleteProduct(id).subscribe({
      next:(res)=>{
        console.log(res);
        // const index=this.AllProductsForAdmin.findIndex(product=>product.id===id);
        // if(index !== -1){
        //   this.AllProductsForAdmin.splice(index,1);
        // $('#confirmationModal').modal('show');


        const Tr=event.target.closest('tr');
        if(Tr){
          Tr.remove();
        }
        // }

      }
    })
  }


  // UpdateProduct(id:string) {
  //   this._movieService.getProductById(id).subscribe({
  //     next: (response) => {
  //       console.log(response);
  //       const navigationExtras:NavigationExtras = {
  //         state: {
  //           productData: response.data
  //         }
         

  //       };
  
  //       // Navigate to the update component with navigation extras
  //       this._router.navigate(['/update'], navigationExtras);
  //     },
  //     error: (error) => {
  //       console.error('Error:', error);
  //     }
  //   });
  // }


  

}
