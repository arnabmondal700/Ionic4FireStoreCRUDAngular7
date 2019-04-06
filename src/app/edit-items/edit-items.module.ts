import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ShopingItem } from '../shoping-item';
import { ShopingCrudService } from '../shoping-crud.service';

import { EditItemsPage } from './edit-items.page';

const routes: Routes = [
  {
    path: '',
    component: EditItemsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditItemsPage]
})
export class EditItemsPageModule {}
