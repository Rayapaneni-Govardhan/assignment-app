import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './products/banner/banner.component';
import { ProductGridViewComponent } from './products/product-grid-view/product-grid-view.component';
import { ProductListViewComponent } from './products/product-list-view/product-list-view.component';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'shared',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: '',
    component: BannerComponent,
  },
  {
    path: 'timer',
    loadChildren: () =>
      import('./timer/timer.module').then((m) => m.TimerModule),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./students/students.module').then((m) => m.StudentsModule),
  },
  {
    path: 'timer-with-subjects',
    loadChildren: () =>
      import('./timer-with-subjects/timer-with-subjects.module').then(
        (m) => m.TimerWithSubjectsModule
      ),
  },
  { path: 'dynamic-divs', loadChildren: () => import('./dynamic-divs/dynamic-divs.module').then(m => m.DynamicDivsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
