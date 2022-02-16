import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceLoginComponent } from './ecommerce-login.component';

describe('EcommerceLoginComponent', () => {
  let component: EcommerceLoginComponent;
  let fixture: ComponentFixture<EcommerceLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
