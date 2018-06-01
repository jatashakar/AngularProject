import { Component, OnInit } from "@angular/core";
import { getQueryValue } from "@angular/core/src/view/query";
import { IProduct } from "./product";

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
    ngOnInit(): void {
        let myAdd = function(x: number, y: number): number { return  x + y; };
        console.log('Hello OnInit Interface');
        throw new Error("Method not implemented.");
    }
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

    products : IProduct[] = [{
        productName: "cart RedRose 31may18 chnaged",       
        code : "101",
        available: "yes",  
        price: 3000,       
        productrating : "4.5",
        imageUrl: 'https://img.youtube.com/vi/SCdgIxWfvaQ/2.jpg'
         },
         {
            productName: "White Rose",       
            code : "102",
            available: "Yes",  
            price: 3001,       
            productrating : "4",
            imageUrl: 'https://img.youtube.com/vi/SCdgIxWfvaQ/2.jpg'
             },
             {
                productName: "Pink Rose",       
                code : "103",
                available: "Yes",  
                price: 3002,       
                productrating : "3.5",
                imageUrl: 'https://img.youtube.com/vi/SCdgIxWfvaQ/2.jpg'
                 }
]

constructor (){
    this.filterProducts = this.products;
    this.listFilter = 'cart';
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