import { TestBed } from '@angular/core/testing';

import { EcommerceAuthGuardService } from './ecommerce-auth-guard.service';

describe('EcommerceAuthGuardService', () => {
  let service: EcommerceAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcommerceAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
