import { Injectable } from '@angular/core';
import { IProduct } from '../products/product';
import { Observable } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';



@Injectable()
export class ProductserviceService {

  handleError(error: any): any {
    throw new Error("Error throughn="+error);
  }
  constructor(private _httpclint : HttpClient) {
    console.log ("service strat");
  }

getProduct() : Observable<IProduct[]>{
   return .do(data => console.log('All Data:'+JSON.stringify(data)))
    .catch(this.handleError);
  
}
  // getProduct():  IProduct[]{

  //   console.log ("service strat 2222");
  //   return [
  //     {
  //       productName: "cart RedRose 31may18 chnaged",       
  //       code : "101",
  //       available: "yes",  
  //       price: 3000,       
  //       productrating : "4.5",
  //       imageUrl: 'https://img.youtube.com/vi/SCdgIxWfvaQ/2.jpg'
  //        },
  //        {
  //           productName: "White Rose",       
  //           code : "102",
  //           available: "Yes",  
  //           price: 3001,       
  //           productrating : "4",
  //           imageUrl: 'https://img.youtube.com/vi/SCdgIxWfvaQ/2.jpg'
  //            },
  //            {
  //               productName: "Pink Rose",       
  //               code : "103",
  //               available: "Yes",  
  //               price: 3002,       
  //               productrating : "3.5",
  //               imageUrl: 'https://img.youtube.com/vi/SCdgIxWfvaQ/2.jpg'
  //                }

  //   ]; 
  // }
}
