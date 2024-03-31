import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent  implements OnInit{

  
  constructor(private _product:MoviesService) {
 
    
  }
allUsers:any[]=[];
  ngOnInit(): void {

    this._product.getUsers().subscribe({
      next:(response)=>{

        this.allUsers=response.data.users;
        console.log(this.allUsers);


      }
      ,
      error:()=>{}
    })
    

  }

}
