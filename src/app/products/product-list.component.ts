import { Component, OnInit } from "@angular/core";
import { getQueryValue } from "@angular/core/src/view/query";
import { IProduct } from "./product";
import { ProductserviceService } from "../service/productservice.service";
import { error } from "protractor";

@Component({
//    below are the meta data propery
    selector: 'product-list', // we can call selector from appcomponent with `<product-list></product-list>`
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
    //template:
    //style:
    //styleUrls:
})
export class ProductListComponent implements OnInit{
    
    errorMsg: any;
pageTitle : string = 'Product List'; //interpolation
name: string = 'Jats'
imgWidth : number = 100
imgheight: number = 100
imageMargin: 4
showImage: boolean = false;
_listFilterby : string ;
filterProducts: IProduct[];

get listFilter() : string{
    return this._listFilterby;
}

set listFilter(value:string) {
    this._listFilterby = value;
    this.filterProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
}
// we can do both binding interpolation and property bind akways work with html property
///////////////below is the return method and call from productlist.html 
// ngReturnMethod() : string{
//     return "Hello Return Method";
// }

//name: string = 'Ranjeet' //interpolation we can also can any function from html and define here like pageTitle
//array<any> product = [] /// we acan also write such a way

products : IProduct[] = []

constructor (private _productService : ProductserviceService){
   
    console.log("products ---- "+this.products);
}

ngOnInit(): void {   
    console.log("products ---- "+this.products);
    this._productService.getProduct()
    .subscribe(this.products => {
        this.products = this.products
        this.filterProducts = this.products
    },
    error => this.errorMsg  = <any>error 
);
    
    console.log('Hello OnInit Interface'+this.products);
   // this._listFilterby='cart';
}

performFilter(filterBy : string) : IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((products:IProduct) => 
    products.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

toggleImage(): void{
    this.showImage = !this.showImage;
}
onRatingClicked(message:string): void{
this.pageTitle = 'Product List'+  message;
}
}