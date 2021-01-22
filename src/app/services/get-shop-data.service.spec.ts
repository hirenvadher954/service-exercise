import { TestBed } from '@angular/core/testing';

import { GetShopDataService } from './get-shop-data.service';

describe('GetShopDataService', () => {
  let service: GetShopDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetShopDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
