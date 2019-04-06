import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../cart-item.service';
import { ShopingCrudService } from '../shoping-crud.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.page.html',
  styleUrls: ['./shoping-cart.page.scss'],
})
export class ShopingCartPage implements OnInit {

  constructor(private router: Router, private cartItemList: CartItemService, private shopingListCRUD: ShopingCrudService, private addCartItem: ShopingCrudService, public alertCtrl: AlertController) { }
  cartItems: any[] = [];
  ngOnInit() {
    console.log(this.cartItemList.get());
    this.cartItems = this.cartItemList.get();

  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      header: 'Order is done',
      subHeader: 'Your Items are Added',
      buttons: ['Dismiss']
    });
    alert.then(x => x.present());
  }
  async checkOutItems() {
    await this.addCartItem.addCartItem(
      {
        userName: JSON.parse(localStorage.getItem('user')).email,
        cartItemList: this.cartItems
      }
    );
    for (let i = 0; i < this.cartItems.length; i++) {
      // console.log(this.cartItems);
      let parm={
        itemName: this.cartItems[i].itemName,
        itemQty: this.cartItems[i].itemNumber,
        itemPrice: this.cartItems[i].itemCost
      };
      // console.log(parm);
      // console.log(this.cartItems[i].id);
      await this.shopingListCRUD.updateItem(parm, this.cartItems[i].id);
      // console.log('hello');
    }
    this.presentAlert();
  }
  navigateBack() {
    this.router.navigate(['/shoping-list']);
  }
}
