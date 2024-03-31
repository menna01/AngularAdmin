import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
   itemDetails:any;
   imgprefix:string='https://image.tmdb.org/t/p/w500';
  constructor(private _activatedRoute:ActivatedRoute , private _moviceService:MoviesService){

   let {id,media_type}= this._activatedRoute.snapshot.params;
   this._moviceService.getMovieDetails(media_type,id).subscribe({
    next:(res)=>{
      this.itemDetails=res;



    }
   });
   
  }

}
