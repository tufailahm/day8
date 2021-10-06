import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products !: Product [] 

  constructor(public productService:ProductService) { }

  ngOnInit(): void {
   this.productService.getProducts().subscribe((data => {
      this.products = data
   }))

  }

}
