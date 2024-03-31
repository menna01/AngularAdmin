import { Component, OnInit } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {


  constructor(private _movieService:MoviesService){

  }



  AllProductsForAdmin:any[]=[];


  ngOnInit(): void {
    
    this._movieService.getProducts().subscribe({

      next:(response)=>{this.AllProductsForAdmin=response.data.products
      
      console.log(response),
    console.log(this.AllProductsForAdmin);},
      error:()=>{}
    })
    

   
  }

}
