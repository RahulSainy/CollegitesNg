import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EcommerceAuthService } from './ecommerce-auth.service';
import { EcommerceUserServiceService } from './ecommerce-user-service.service';
import {switchMap, map} from 'rxjs/operators';
import { CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class EcommerceAdminAuthGuardService implements CanActivate{

  constructor(private auth: EcommerceAuthService, private userService : EcommerceUserServiceService) { }
  
  // canActivate(): Observable<boolean> {
  //   return this.auth.user$.pipe(
  //     switchMap(user => this.userService.get(user.uid)),
  //     map(appUser => appUser.isAdmin)
  //   );

canActivate(): Observable<boolean> {
   
    return this.auth.appUser$.pipe(
          map((appUser) => appUser.isAdmin)
        )
      
    
  }  
}
