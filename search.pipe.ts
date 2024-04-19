import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies: any[], term: string): any[] {
    if (!term || term.trim() === '') {
      return movies; // Return all movies if the search term is empty
    }
    
    term = term.toLowerCase();
    return movies.filter(movie => movie.name.toLowerCase().includes(term));
  }
}
