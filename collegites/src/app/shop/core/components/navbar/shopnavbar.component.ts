import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from 'src/app/shop/shared/models/app-user';
import { ShoppingCart } from 'src/app/shop/shared/models/shopping-cart';
import { AuthService } from 'src/app/shop/shared/services/auth.service';
import { ShoppingCartService } from 'src/app/shop/shared/services/shopping-cart.service';

@Component({
  selector: 'shopnavbar',
  templateUrl: './shopnavbar.component.html',
  styleUrls: ['./shopnavbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser: AppUser | undefined;
  cart$: Observable<ShoppingCart> | undefined;

  constructor(
    private auth: AuthService,
    private shoppingCartService: ShoppingCartService
  ) { }

  async ngOnInit(): Promise<void> {
    this.auth.appUser$.subscribe((appUser: any) => {
      this.appUser = appUser;
    });
    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout(): void {
    this.auth.logout();
  }

}
