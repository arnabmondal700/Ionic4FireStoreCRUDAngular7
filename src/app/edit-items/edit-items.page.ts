import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItems } from '../cart-items';
import { ShopingCrudService } from '../shoping-crud.service';
import { AlertController } from '@ionic/angular';
import { EditingDataService } from '../editing-data.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.page.html',
  styleUrls: ['./edit-items.page.scss'],
})
export class EditItemsPage implements OnInit {

  shopingItem = {} as CartItems;
  itemId: string;
  constructor(private router: Router, private shopingListCRUD: ShopingCrudService, public alertCtrl: AlertController, private editCartService: EditingDataService) { }

  navigateBack(): void {
    this.router.navigate(['/shoping-list']);
  }
  ngOnInit() {
    console.log(this.editCartService.get());
    this.shopingItem = this.editCartService.get();
  }
  async editShopingItem(parm: CartItems) {
    this.shopingListCRUD.currentId.subscribe(itemId => this.itemId = itemId);
    await this.shopingListCRUD.updateItem(parm, this.itemId);
    this.presentAlert();
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      header: 'Item is Updated',
      subHeader: 'Your Items are Updated',
      buttons: ['Dismiss']
    });
    alert.then(x => x.present());
  }
}
