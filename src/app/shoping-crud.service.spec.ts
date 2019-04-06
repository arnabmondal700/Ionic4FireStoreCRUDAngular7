import { TestBed } from '@angular/core/testing';

import { ShopingCrudService } from './shoping-crud.service';

describe('ShopingCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopingCrudService = TestBed.get(ShopingCrudService);
    expect(service).toBeTruthy();
  });
});
