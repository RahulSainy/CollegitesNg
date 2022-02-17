import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { ActivatedRoute } from '@angular/router'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

import { Observable, switchMap } from 'rxjs'
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
    this.user$ = afAuth.authState
  }

  login() {
    let returnUrl =
      this.route.snapshot.queryParamMap.get('returnUrl') || '/ecommerce'
    localStorage.setItem('returnUrl', returnUrl)
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
  logout() {
    this.afAuth.signOut()
  }

  get appUser$(): Observable<AppUser> {
    return this.auth.user$.pipe(
      switchMap((user: any) => this.userService.get(user.uid))
    )
  }
}
