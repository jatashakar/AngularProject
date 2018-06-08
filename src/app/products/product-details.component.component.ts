import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-product-details.component',
  templateUrl: './product-details.component.component.html',
  styleUrls: ['./product-details.component.component.css']
})
export class ProductDetails implements OnInit {
  pageTitle : string = 'Poduct Details';
 product : IProduct;
  constructor() { }
  ngOnInit() {
  }

}
