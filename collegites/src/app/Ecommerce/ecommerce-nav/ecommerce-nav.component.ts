import { Component, OnDestroy, OnInit } from '@angular/core';
import { EcommerceAuthService } from '../ecommerce-auth.service';
import { AppUser } from '../Models/Ecommerce-user';

@Component({
  selector: 'app-ecommerce-nav',
  templateUrl: './ecommerce-nav.component.html',
  styleUrls: ['./ecommerce-nav.component.css']
})
export class EcommerceNavComponent implements OnInit {
  appUser: AppUser;
  constructor(private authService: EcommerceAuthService ) { 
  
  }

  async ngOnInit(){
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);

  }
  logout(){
    this.authService.logout(); 
  }

}
  