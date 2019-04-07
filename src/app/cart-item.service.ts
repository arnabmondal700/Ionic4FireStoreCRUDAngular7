import { Injectable } from '@angular/core';
import { ShopingItem } from './shoping-item';
@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  cartItems: ShopingItem[] = [];
  constructor() { }
  set(itemListObj: ShopingItem[]) {
    this.cartItems = itemListObj;
  }
  get() {
    return this.cartItems;
  }
}
