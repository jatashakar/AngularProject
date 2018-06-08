import { Injectable } from '@angular/core';
import { IProduct } from '../products/product';
import { Observable, pipe} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/do';



@Injectable()
export class ProductserviceService {

  private _productUrl = 'http://localhost:4200/assets/data/products.json';
  
  handleError(error: any): any {
    throw new Error("Error throughn=" + error);
  }
  constructor(private _httpclint: HttpClient) {
    console.log("service strat URL="+this._productUrl);

  }
  
  getProduct(): Observable<IProduct[]> {
    console.log('return data ='+this._httpclint.get<IProduct[]>(this._productUrl));
    return this._httpclint.get<IProduct[]>(this._productUrl)
    .do(console.log('hello do'));
    
    pipe(
      tap(data => console.log('All Data:' + JSON.stringify(data))),
      catchError(this.handleError)
    )
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
