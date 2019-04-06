import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
// import { ShopingItem } from './shoping-item';
import { CartItems } from './cart-items';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopingCrudService {
  private responseSource = new BehaviorSubject<any>([]);
  items = this.responseSource.asObservable();
  private itemId = new BehaviorSubject<string>("hello world");
  currentId = this.itemId.asObservable();

  constructor(private firestore: AngularFirestore) {
    this.getShopingData();
  }
  getData() {
    return this.getShopingData();
    //return this.items;
  }

  getShopingData() {
    this.firestore.collection('cart').snapshotChanges().subscribe(
      (res) => this.responseSource.next(res),
      (err) => console.log(err),
      () => console.log('done!')
    );
  }
  updateItemId(itemId: string) {
    this.itemId.next(itemId);
  }
  async addShopingItem(parm: CartItems) {
    console.log(parm);
    try {
      await this.firestore.collection('cart').add(parm)
        .then(res => {
          console.log(res.id);
          this.items.subscribe(res => this.refresh(res));
        }).catch(function (error) {
          console.error("Error adding document: ", error);
        });
    } catch (e) {
      alert(e.message);
    }
  }
  async addCartItem(parm: any) {
    try {
      await this.firestore.collection('cartItemSelectedByUser').add(parm).then(res => {
        console.log(res.id);
      })
    } catch (e) {
      alert(e.message);
    }
  }
  refresh(response) {
    // console.log("executing refresh");
    for (let i = 0; i < response.length; i++) {
      if (response[i].payload.doc._document.proto === undefined) {
        console.log("Getting Undefined Value");
        this.getShopingData();
      }
    }
  }
  deleteItem(itemName: string): void {
    this.firestore.collection('cart').doc(itemName).delete().then(function (e) {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }

  updateItem(itemObj: CartItems, itemName: string): void {
    this.firestore.collection('cart').doc(itemName).update({
      itemName: itemObj.itemName,
      itemNumber: itemObj.itemQty
    }).then(res => {
      this.items.subscribe(res => this.refresh(res));
    });
  }
}
