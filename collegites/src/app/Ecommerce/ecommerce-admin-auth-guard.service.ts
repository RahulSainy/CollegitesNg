import { Injectable } from '@angular/core';
import { EcommerceAuthService } from './ecommerce-auth.service';
import {map} from 'rxjs/operators';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EcommerceAdminAuthGuardService implements CanActivate{

  constructor(private auth: EcommerceAuthService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .pipe(map(appUser => appUser.isAdmin));
  }
  // canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   // with RouterStateSnapshot we can get the url that the user tried to access when this AuthGuard kicked in
  //   return this.auth.user$
  //     .pipe(map(user => {
  //       // tslint:disable-next-line:max-line-length
  //       // we're calling the map operator and transform this observable from a user object into a boolean and angular will internally subscribe to this observable and remove the subscription later
  //       if(user) { return true; }

  //       this.router.navigate(['/ecommerce-login'], { queryParams: { returnUrl: state.url }});
  //       // query parameter that determines the return url
  //       return false;
  //   }));
  // }
}

