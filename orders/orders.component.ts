import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent  implements OnInit{

/**
 *
 */

allOrders:any[]=[];
cartItems:any[]=[];
constructor(private _service:MoviesService ) {
  
}

  ngOnInit(): void {

    this._service.getOrders().subscribe({
      next:(response)=>{
       this.allOrders=response.data.orders;
       this.cartItems=response.data.orders.cartItems
       console.log(this.allOrders)
       
      }
    })

    
  }


}
