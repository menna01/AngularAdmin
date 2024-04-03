import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent implements OnInit {

  Allcategories:any[]=[];
  allproducts:any[]=[];

 
  constructor(private _productService:MoviesService) {
   
    
  }


  ngOnInit(): void {
    this._productService.getAllProducts().subscribe({
      next:(response)=>{
        this.allproducts=response.data.products.splice(0,8);
        console.log(response);
        console.log(this.allproducts);

      }
      ,
      error:(error)=>{
        console.log(error);

      }
    })
    this._productService.getCategories().subscribe({
      next:(response)=>{
        this.Allcategories=response.data.Categories;
        // console.log(response);
        console.log(this.Allcategories);

      }
      ,
      error:(error)=>{
        console.log(error);

      }
    })



    
  }

}
