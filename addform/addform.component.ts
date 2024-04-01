import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrl: './addform.component.css'
})
export class AddformComponent implements OnInit {

constructor(private _auth:MoviesService,private _router:Router) {
  
}

  productForm:FormGroup = new FormGroup({


    name:new FormControl(null,[Validators.required]),
    description: new FormControl(null,[Validators.required]),
    price:new FormControl(null,[Validators.required]),
    category:new FormControl(null,[Validators.required]),
    colors:new FormControl(null,[Validators.required]),
    quantity: new FormControl(null,[Validators.required]),
    images:new FormControl(null,[Validators.required])


  })
  isloadind:boolean=false;


  ngOnInit(): void {
    
  }

  submitAddForm(productForm:FormGroup){
    this.isloadind=true;

    localStorage.setItem('ProductName',productForm.value.name);
    localStorage.setItem('desctiption',productForm.value.description);
    localStorage.setItem('price',productForm.value.price);
    localStorage.setItem('quantity',productForm.value.quantity);
    localStorage.setItem('colors',productForm.value.colors);
    localStorage.setItem('categoty',productForm.value.category);
    localStorage.setItem('images',productForm.value.images);

    
    this._auth.addproduct(productForm.value).subscribe({

      next:(response)=>{
        console.log(response.data)
        this._router.navigate(['/about']);


      },error:(e)=>{
        this.isloadind=false;

      }

    })

  }
  

}
