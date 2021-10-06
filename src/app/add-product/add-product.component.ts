import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm!: FormGroup
  constructor(public formBuilder: FormBuilder, public productService: ProductService,public router:Router) { }

  ngOnInit(): void {

    this.productForm = this.formBuilder.group({
      productId: ['', Validators.required],
      productName: ['', [Validators.required, Validators.minLength(5)]],
      quantityOnHand: ['', Validators.required],
      price: ['', Validators.required],
    })
  }

  saveProduct() {
    this.productService.addProduct(this.productForm.value)
      .subscribe(response => {
        console.log(response);
       // this.router.navigate(['productList'])
      },
        err => {
          this.router.navigate(['productList'])
        })
  }

}
