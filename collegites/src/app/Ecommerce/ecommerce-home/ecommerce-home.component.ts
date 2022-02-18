import { Component } from '@angular/core';
import { EcommerceUserServiceService } from '../shared/services/ecommerce-user-service.service';
import { Router } from '@angular/router';
import { EcommerceAuthService } from '../shared/services/ecommerce-auth.service';

@Component({
  selector: 'app-ecommerce-home',
  templateUrl: './ecommerce-home.component.html',
  styleUrls: ['./ecommerce-home.component.css']
})
export class EcommerceHomeComponent {
  constructor(private userService: EcommerceUserServiceService, private auth: EcommerceAuthService, router:Router) {
    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);
        let returnUrl = localStorage.getItem('returnUrl');
        if (returnUrl) {
          localStorage.removeItem('returnUrl');
          router.navigateByUrl(returnUrl);
        }
      }
    });
   
  }
}
