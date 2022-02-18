import { TestBed } from '@angular/core/testing';

import { EcommerceAuthService } from './ecommerce-auth.service';

describe('EcommerceAuthService', () => {
  let service: EcommerceAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcommerceAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
