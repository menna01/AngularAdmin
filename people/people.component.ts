import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent implements OnInit {

  Allcategories:any[]=[];

 
  constructor(private _productService:MoviesService) {
   
    
  }


  ngOnInit(): void {
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
