import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StartcomponentComponent } from './startcomponent/startcomponent.component';
import { PserviceService } from './pservice.service';



@NgModule({
  declarations: [
    AppComponent, ProductListComponent, StartcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [PserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
