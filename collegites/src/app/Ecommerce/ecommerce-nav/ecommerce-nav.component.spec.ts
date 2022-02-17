import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceNavComponent } from './ecommerce-nav.component';

describe('EcommerceNavComponent', () => {
  let component: EcommerceNavComponent;
  let fixture: ComponentFixture<EcommerceNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
