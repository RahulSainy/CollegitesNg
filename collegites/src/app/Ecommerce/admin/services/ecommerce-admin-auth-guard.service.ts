import { Injectable } from '@angular/core';
import { EcommerceAuthService } from '../../ecommerce-auth.service';
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

}

