import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  { path: 'shoping-list', loadChildren: './shoping-list/shoping-list.module#ShopingListPageModule' },
  { path: 'add-shoping', loadChildren: './add-shoping/add-shoping.module#AddShopingPageModule' },
  { path: 'edit-items', loadChildren: './edit-items/edit-items.module#EditItemsPageModule' },
  { path: 'login-page', loadChildren: './login-page/login-page.module#LoginPagePageModule' },
  { path: 'shoping-cart', loadChildren: './shoping-cart/shoping-cart.module#ShopingCartPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
