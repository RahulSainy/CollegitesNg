import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs';
import { EcommerceAuthService } from './ecommerce-auth.service';

@Injectable({
  providedIn: 'root'
})
export class EcommerceAuthGuardService implements CanActivate{

  constructor(private auth: EcommerceAuthService, private router:Router) { } 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.user$
      .pipe(map(user => {
         if(user) { return true; }

        this.router.navigate(['/ecommerce-login'], { queryParams: { returnUrl: state.url }});
        return false;
    }));
  }


}
