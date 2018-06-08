import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StartcomponentComponent } from './startcomponent/startcomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './products/product-details.component';




@NgModule({
  declarations: [
    AppComponent, ProductListComponent, StartcomponentComponent, ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'products' , component: ProductListComponent},
      {path : 'products/:id' , component: ProductDetailsComponent},
      {path : 'welcome' , component: Welcome},
      {path : '' ,redirectTo: 'welcome', pathMatch: 'full'},
      {path : '**' ,redirectTo: 'welcome', pathMatch: 'full'},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
