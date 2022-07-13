import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { BannerComponent } from './banner/banner.component';
import { ProductGridViewComponent } from './product-grid-view/product-grid-view.component';
import { ProductListViewComponent } from './product-list-view/product-list-view.component';


@NgModule({
  declarations: [
    ProductsComponent,
    BannerComponent,
    ProductGridViewComponent,
    ProductListViewComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
