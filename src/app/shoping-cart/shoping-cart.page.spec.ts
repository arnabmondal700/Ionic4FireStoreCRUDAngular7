import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCartPage } from './shoping-cart.page';

describe('ShopingCartPage', () => {
  let component: ShopingCartPage;
  let fixture: ComponentFixture<ShopingCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingCartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
