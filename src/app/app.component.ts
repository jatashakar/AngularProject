import { Component } from '@angular/core';
import { ProductserviceService } from './service/productservice.service';

@Component({
  selector: 'app-root',
  template:`
  <div>
<nav class ='navbar navbar-default'>
<div class = 'conrainer-fluid'>
<a class='navbar-brand'>{{pageTitle}}</a>
<ul class = 'nav navbar-nav'>
<li><a [routerLink]="['/welcome']">Home</a></li>
<li><a [routerLink]="['/products']">Product List</a></li>
</ul>
</div>
</nav>
<div class= 'container'>
<router-outlet></routrer-outlet>
</div>
  </div>
  `,
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  providers : [ProductserviceService]
})
export class AppComponent {
  title = 'app...................';
  name : string =  '9999991';
}
