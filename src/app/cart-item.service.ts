import { Injectable } from '@angular/core';
import { CartItems } from './cart-items';
import { ShopingItem } from './shoping-item';
@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  cartItems: ShopingItem[] = [];
  constructor() { }
  set(itemListObj: ShopingItem[]) {
    this.cartItems = itemListObj;
    // console.log(this.cartItems);
  }
  get() {
    return this.cartItems;
  }
}
