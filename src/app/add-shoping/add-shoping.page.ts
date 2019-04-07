import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItems } from '../cart-items';
import { ShopingCrudService } from '../shoping-crud.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-shoping',
  templateUrl: './add-shoping.page.html',
  styleUrls: ['./add-shoping.page.scss'],
})
export class AddShopingPage implements OnInit {

  shopingItem = {} as CartItems;
  shopinglist = [];
  constructor(private router: Router, private shopingListCRUD: ShopingCrudService, public alertCtrl: AlertController) { }

  ngOnInit() { }

  navigateBack(): void {
    this.router.navigate(['/shoping-list']);
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      header: 'Data Added',
      subHeader: 'Your Data Is Added',
      buttons: ['Dismiss']
    });
    alert.then(x => x.present());
  }
  warningAlert() {
    let alert = this.alertCtrl.create({
      header: 'Warning',
      subHeader: 'Enter your Data correctly',
      buttons: ['Dismiss']
    });
    alert.then(x => x.present());
  }
  async addShopingItem(parm: CartItems) {
    console.log(parm.itemName, "/n", parm.itemQty, "/n", parm.itemPrice);
    if (parm.itemName !== undefined && parm.itemName !== "" && parm.itemQty !== undefined && parm.itemQty !== null) {
      this.presentAlert();
      await this.shopingListCRUD.addShopingItem(parm);
    }
    else {
      this.warningAlert();
    }

  }

}
