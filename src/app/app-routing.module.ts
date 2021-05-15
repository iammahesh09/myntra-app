import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./dashboard/home/home.module').then(m => m.HomeModule) },
  { path: 'products', loadChildren: () => import('./dashboard/products/products.module').then(m => m.ProductsModule) },
  { path: 'home', loadChildren: () => import('./dashboard/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
