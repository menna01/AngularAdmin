import { Component, OnInit } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';

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

  ngOnInit(): void {
    
    this._movieService.getProducts().subscribe({

      next:(response)=>{this.AllProductsForAdmin=response.data.products
      
      console.log(response),
    console.log(this.AllProductsForAdmin);},
      error:()=>{}
    })
    

   
  }

}
