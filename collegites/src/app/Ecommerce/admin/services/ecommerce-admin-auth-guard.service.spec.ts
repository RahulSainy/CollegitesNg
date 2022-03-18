import { TestBed } from '@angular/core/testing';

import { EcommerceAdminAuthGuardService } from './ecommerce-admin-auth-guard.service';

describe('EcommerceAdminAuthGuardService', () => {
  let service: EcommerceAdminAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcommerceAdminAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
