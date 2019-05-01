import { ShopingItem } from './../shoping-item';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ShopingCrudService } from '../shoping-crud.service';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { CartItems } from '../cart-items';
import { CartItemService } from '../cart-item.service';
import { EditingDataService } from '../editing-data.service';
import { Observable, from } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.page.html',
  styleUrls: ['./shoping-list.page.scss'],
})
export class ShopingListPage implements OnInit, OnDestroy {
  items: any[];
  user: any = [];
  userType: string;
  addButtonClicked: boolean[] = [];
  itemQty: number[] = [];
  selectedItems: ShopingItem[] = [];
  shoppingListSubscription: any;

  constructor(private router: Router, private shopingList: ShopingCrudService, private authService: AuthService, private userdata: UserService, private cartItemsList: CartItemService, private editCartService: EditingDataService) {
    // this.shoppingListSubscription = this.shopingList.items.subscribe(res => this.itemShortingFunction(res));
  }
  ngOnInit() {
    // this.shopingList.items.subscribe(res => this.itemShortingFunction(res));
    //this.items$=await this.shopingList.getData();
    this.shopingList.items.subscribe(res => {
      this.itemShortingFunction(res);
      // this.items = res
    });
    this.userdata.users.subscribe(res => this.checkUserType(res));
  }

  ngOnDestroy() {
    // this.shoppingListSubscription.unsubscribe();
  }

  itemAdded(itemIndex): void {
    this.addButtonClicked[itemIndex] = false;
    this.itemQty[itemIndex] = 1;
  }
  checkUserType(res): void {
    let count: number;
    for (count = 0; count < res.length; count++) {
      if (res[count].payload.doc._document.proto.fields.id.stringValue === JSON.parse(localStorage.getItem('user')).email) {
        this.userType = res[count].payload.doc._document.proto.fields.type.stringValue;
      }

    }
  }
  checkOut(): void {
    // this.cartItemsList.clear();
    this.selectedItems = [];
    for (let i = 0; i < this.itemQty.length; i++) {
      if (this.itemQty[i] > 0) {
        let obj: ShopingItem = {
          id: this.items[i].payload.doc.id,
          itemName: this.items[i].payload.doc._document.proto.fields.itemName.stringValue,
          itemNumber: Number(this.itemQty[i]),
          itemCost: Number(this.items[i].payload.doc._document.proto.fields.itemPrice.integerValue),
          itemInStore: Number(this.items[i].payload.doc._document.proto.fields.itemQty.integerValue)
        };
        this.selectedItems.push(obj);
      }
    }
    this.cartItemsList.set(this.selectedItems);
    this.router.navigate(['/shoping-cart']);
  }
  addMoreCartItem(itemIndex): void {
    if (this.itemQty[itemIndex] > 0) {
      this.itemQty[itemIndex]++;
    }
  }
  removeCartItem(itemIndex): void {
    if (this.itemQty[itemIndex] > 0) {
      --this.itemQty[itemIndex];
    } else {
      this.addButtonClicked[itemIndex] = true;
    }
  }
  itemShortingFunction(res) {
    this.items = [];
    this.items = res;
    if (this.items.length !== 0 && this.items.length !== undefined) {
      let i: number, j: number;
      let temp: any;

      for (i = 0; i < this.items.length; i++) {
        for (j = 0; j < this.items.length - i - 1; j++) {
          if (this.items[j].payload.doc._document.proto !== undefined && this.items[j + 1].payload.doc._document.proto !== undefined) {
            if (this.items[j].payload.doc._document.proto.createTime > this.items[j + 1].payload.doc._document.proto.createTime) {
              temp = this.items[j];
              this.items[j] = this.items[j + 1];
              this.items[j + 1] = temp;
            }
          }
        }
        this.addButtonClicked[i] = true;
        this.itemQty[i] = 0;
      }
    }
    console.log(this.items);
  }
  addToCart(): void {
    this.router.navigate(['/add-shoping']);
  }
  deleteItem(item: string): void {
    this.shopingList.deleteItem(item);
  }
  navigateToEdit(itmeId: string, itemName: string, itemCost: number, itemQty: number): void {
    console.log(itmeId);
    this.shopingList.updateItemId(itmeId);
    this.editCartService.set({
      itemName: itemName,
      itemQty: itemQty,
      itemPrice: itemCost
    });
    this.router.navigate(['/edit-items']);
  }
}
