import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShopingPage } from './add-shoping.page';

describe('AddShopingPage', () => {
  let component: AddShopingPage;
  let fixture: ComponentFixture<AddShopingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShopingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShopingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
