import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  constructor( private _moviesServie:MoviesService){

   

  }

  trendingMovies:any[]=[];
  trendingTV:any[]=[];
  trendingPeople:any[]=[];

  erroeMessage:string="there is a problem Hare";
   imgprefix:string='https://image.tmdb.org/t/p/w500';

ngOnInit(): void {
  

  this._moviesServie.getMovies("movie").subscribe({

    next:(data)=> this.trendingMovies=data.results.slice(0,10),
    error:(error)=>this.erroeMessage=error

  })

  this._moviesServie.getMovies("tv").subscribe({

    next:(data)=> this.trendingTV=data.results.slice(0,10),
    error:(error)=>this.erroeMessage=error

  })
  this._moviesServie.getMovies("person").subscribe({

    next:(data)=> this.trendingPeople=data.results.filter((Movie:any)=> Movie.profile_path != null).slice(0,10),
    error:(error)=>this.erroeMessage=error

  })
}

}
