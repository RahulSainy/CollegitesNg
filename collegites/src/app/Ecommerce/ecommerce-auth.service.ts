import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { ActivatedRoute } from '@angular/router'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

import { from, Observable, switchMap } from 'rxjs'
import { EcommerceUserServiceService } from './ecommerce-user-service.service'
import { AppUser } from './Models/Ecommerce-user'
@Injectable({
  providedIn: 'root',
})
export class EcommerceAuthService {
  user$: Observable<firebase.User | null>
  constructor(
    private userService: EcommerceUserServiceService,
    private auth: EcommerceAuthService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
  ) {
    this.user$ = afAuth.authState;
    // we're going to unwrap this observable in our template using the async pipe
    // this pipe would automatically unsubscribe from this observable when that component is destroyed
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/ecommerce';
    localStorage.setItem('returnUrl', returnUrl);
    // tslint:disable-next-line:max-line-length
    // before sending the user to google we want to store the return url in local storage; if we have the returnUrl parameter we're going to use that, otherwise we're going to use the route of our website

    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    // we call signInWithRedirect() because we want to implement Google authentication in our app
  }

  logout() {
    this.afAuth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
      .pipe(switchMap(user => {
        if (user) { return this.userService.get(user.uid); }

        // return Observable.of(null);
        return from<string>('');
        // return an observable of null
      }));
  }
}
