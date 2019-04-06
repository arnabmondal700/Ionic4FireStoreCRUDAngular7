import { Injectable } from '@angular/core';
import { CartItems } from './cart-items';
@Injectable({
  providedIn: 'root'
})
export class EditingDataService {

  ItemInfo: CartItems;
  constructor() { }
  set(itemListObj: CartItems) {
    this.ItemInfo = itemListObj;
  }
  get() {
    return this.ItemInfo;
  }
}
