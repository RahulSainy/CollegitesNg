import { Component, OnInit } from '@angular/core';
import { EcommerceAuthService } from '../shared/services/ecommerce-auth.service';
import { AppUser } from '../shared/Models/Ecommerce-user';

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
    console.log("workerd");
    this.authService.logout(); 
  }

}
  