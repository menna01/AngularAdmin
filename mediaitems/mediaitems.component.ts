import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mediaitems',
  templateUrl: './mediaitems.component.html',
  styleUrl: './mediaitems.component.css'
})
export class MediaitemsComponent {

  @Input() Movie:any;
  imgprefix:string='https://image.tmdb.org/t/p/w500';

}
