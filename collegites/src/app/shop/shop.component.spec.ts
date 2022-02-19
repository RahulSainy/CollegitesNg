import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ShopComponent } from './shop.component';

describe('ShopComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ShopComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShopComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mich-shop'`, () => {
    const fixture = TestBed.createComponent(ShopComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mich-shop');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ShopComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('mich-shop app is running!');
  });
});
