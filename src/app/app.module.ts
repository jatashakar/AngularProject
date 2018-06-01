import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StartcomponentComponent } from './startcomponent/startcomponent.component';
import { ProductserviceService } from './service/productservice.service';



@NgModule({
  declarations: [
    AppComponent, ProductListComponent, StartcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
