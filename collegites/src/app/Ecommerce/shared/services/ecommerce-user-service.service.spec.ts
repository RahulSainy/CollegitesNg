import { TestBed } from '@angular/core/testing';

import { EcommerceUserServiceService } from './ecommerce-user-service.service';

describe('EcommerceUserServiceService', () => {
  let service: EcommerceUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcommerceUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
