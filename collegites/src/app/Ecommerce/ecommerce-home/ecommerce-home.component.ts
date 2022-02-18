import { Component } from '@angular/core';
import { EcommerceUserServiceService } from '../ecommerce-user-service.service';
import { Router } from '@angular/router';
import { EcommerceAuthService } from '../ecommerce-auth.service';

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
   
  //   auth.user$.subscribe(user => {
  //     if(user){
  //       userService.save(user);
  // //       let returnUrl = localStorage.getItem('returnUrl');  
  // //       if (returnUrl) { // i.e, not null and not empty string 
  // //         // now returnUrl cannot be null, so it must be a string, which is valid to use in this call
  // //         router.navigateByUrl(returnUrl);
  // //     }
  //     }
  //   }); 
  }
}
