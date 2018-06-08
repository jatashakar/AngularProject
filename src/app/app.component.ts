import { Component } from '@angular/core';
import { ProductserviceService } from './service/productservice.service';

@Component({
  selector: 'app-root',
  template:`<product-list>`,
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  providers : [ProductserviceService]
})
export class AppComponent {
  title = 'app...................';
  name : string =  '9999991';
}
