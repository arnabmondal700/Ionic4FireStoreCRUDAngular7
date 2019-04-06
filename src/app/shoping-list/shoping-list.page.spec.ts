import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingListPage } from './shoping-list.page';

describe('ShopingListPage', () => {
  let component: ShopingListPage;
  let fixture: ComponentFixture<ShopingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
