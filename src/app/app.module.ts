import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StartcomponentComponent } from './startcomponent/startcomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetails } from './products/product-details.component.component';



@NgModule({
  declarations: [
    AppComponent, ProductListComponent, StartcomponentComponent, ProductDetails
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
