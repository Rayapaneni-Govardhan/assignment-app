import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductGridViewComponent } from './product-grid-view/product-grid-view.component';
import { ProductListViewComponent } from './product-list-view/product-list-view.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      { path: 'grid-view', component: ProductGridViewComponent },
      { path: 'list-view', component: ProductListViewComponent },
    ],
  },
  // { path: 'grid-view', component: ProductGridViewComponent },
  // { path: 'list-view', component: ProductListViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
