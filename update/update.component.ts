import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
itemDetails2:any;
productData:any;

img:any;
Id:any;

  
  constructor(private _auth:MoviesService, private route:ActivatedRoute,private _router:Router) {
    let {id}= this.route.snapshot.params;
    this.Id=id;
    this._auth.getProductById(id).subscribe({
     next:(res)=>{
       this.itemDetails2=res.data.product;
       console.log(res.data.product);
       this.productForm.patchValue({
        name:this.itemDetails2.name,
        category:this.itemDetails2.category,
        colors:this.itemDetails2.colors
     
      
        
  
  
      })
      this.img=this.itemDetails2.images[0];
  
 
 
 
     }
    });

    
   
    
  }

  productForm:FormGroup=new FormGroup({
    name:new FormControl(null),
    category:new FormControl(null),
    colors:new FormControl(null),
    images:new FormControl(null,[Validators.required])



})

submitupdateForm(productForm:FormGroup){
  this.isloadind=true;
const formData = new FormData();
formData.append('name', productForm.value.name);
  formData.append('category', productForm.value.category);
  formData.append('colors', productForm.value.colors);
  const fileInput =<HTMLInputElement>document.getElementById('fileInput');
  if(fileInput.files && fileInput.files.length>0){
    formData.append('images',fileInput.files[0]);
  }

  this._auth.updateProduct(this.Id,formData).subscribe({
    next:(response)=>{
      console.log(response);
      this._router.navigate(['/about']);


    }

  })



}
    





categoris:any[]=[];
ngOnInit(): void {
  this._auth.getCategories().subscribe({
    next:(response)=>{
      this.categoris=response.data.Categories;
      // console.log(response);
      console.log(this.categoris);

    }
    ,
    error:(error)=>{
      console.log(error);

    }
  })



  
}

  // setInitialValue(itemDetails:any){
  //   this.productForm.patchValue({
  //     name:itemDetails.name,
  //     category:itemDetails.category,
  //     colors:itemDetails.colors,
  //     images:itemDetails.images


  //   })


  // }
  isloadind:boolean=false;

  

//   submitUpdateForm(productForm:FormGroup){
//     this.isloadind=true;
// const formData = new FormData();
// formData.append('name', productForm.value.name);
// formData.append('category', productForm.value.category);
// formData.append('colors', productForm.value.colors);

// const fileInput=<HTMLInputElement>document.getElementById('fileInput');
// if(fileInput.files && fileInput.files.length>0){
// formData.append('images',fileInput.files[0]);

// }

// this._auth.updateProduct(formData).subscribe({
// next: (response) => {
//   console.log(response.data);
//   localStorage.setItem('ProductName', productForm.value.name);
//   // Handle other localStorage items
//   this._router.navigate(['/about']);
//   localStorage.setItem('ProductName',productForm.value.name);
// localStorage.setItem('desctiption',productForm.value.description);
// localStorage.setItem('price',productForm.value.price);
// localStorage.setItem('quantity',productForm.value.quantity);
// localStorage.setItem('colors',productForm.value.colors);
// localStorage.setItem('categoty',productForm.value.category);
// localStorage.setItem('images',productForm.value.images);
// },
// error: (e) => {
//   this.isloadind = false;
//   console.log(e);
// }


// });

// // this.isloadind=true;
// // console.log(productForm.value);
// // this._auth.addproduct(productForm.value).subscribe({

// //   next:(response)=>{
// //     console.log(response.data)
// //     this._router.navigate(['/about']);


// //   },error:(e)=>{
// //     this.isloadind=false;
// //     console.log(e);

// //   }

  

// // })
// // localStorage.setItem('ProductName',productForm.value.name);
// // localStorage.setItem('desctiption',productForm.value.description);
// // localStorage.setItem('price',productForm.value.price);
// // localStorage.setItem('quantity',productForm.value.quantity);
// // localStorage.setItem('colors',productForm.value.colors);
// // localStorage.setItem('categoty',productForm.value.category);
// // localStorage.setItem('images',productForm.value.images);

// }
  // productForm:FormGroup = new FormGroup({


  //   name:new FormControl(null,[Validators.required]),
  //   category:new FormControl(null,[Validators.required]),
  //   colors:new FormControl(null,[Validators.required]),
  //   images:new FormControl(null,[Validators.required])



  // })


}
