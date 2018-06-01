import { Component } from '@angular/core';
import { ProductserviceService } from './service/productservice.service';
import { PserviceService } from './pservice.service';

@Component({
  selector: 'app-root',
  template:`<product-list></product-list>`,
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  providers : [ProductserviceService, PserviceService]
})
export class AppComponent {
  title = 'app...................';
  name : string =  '9999991';
}
