import { TestBed } from '@angular/core/testing';

import { EditingDataService } from './editing-data.service';

describe('EditingDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditingDataService = TestBed.get(EditingDataService);
    expect(service).toBeTruthy();
  });
});
