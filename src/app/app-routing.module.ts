import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {Code404Component} from './code404/code404.component';
import {ProductDescComponent} from './product-desc/product-desc.component';
import {SellerInfoComponent} from './seller-info/seller-info.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}, // 重定向路由
  {path: 'home', component: HomeComponent},
  // {path: 'product', component: ProductComponent}, // 通过link增加查询参数传参
  {path: 'product/:id', component: ProductComponent, children: [
      {path: '', component: ProductDescComponent},
      {path: 'seller/:id', component: SellerInfoComponent},
    ]}, // 通过路由传参
  {path: '**', component: Code404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
