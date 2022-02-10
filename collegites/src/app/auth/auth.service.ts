import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router'
import { Subject } from 'rxjs'
import { UIservice } from '../Shared/ui.service'
import { AuthData } from './auth-data.model'

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>()
  private isAuthenticated = false

  constructor(
    private router: Router,
    private afauth: AngularFireAuth,
    private uiService: UIservice,
  ) {}

  registerUser(authData: AuthData) {
    this.afauth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        this.uiService.loadingStateChanged.next(true);
        this.authSuccesfully()
      })
      .catch((error) => {
        this.uiService.showSnackBar(error.message,'X', 5000);
        console.log(error);
      });
  }
  login(authData: AuthData) {
    this.uiService.loadingStateChanged.next(true)
    this.afauth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        this.uiService.loadingStateChanged.next(false);
        this.authSuccesfully()
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/wrong-password":
          case "auth/user-not-found":
            {
              this.uiService.showSnackBar("Wrong email address or password.",'X', 5000);
              break;
            }
          case "auth/user-disabled":
          case "user-disabled":
            {
              this.uiService.showSnackBar("This account is disabled",'X', 5000);
              break;
            }
          }
      })
  }
  logout() {
    this.isAuthenticated = false
    this.authChange.next(false)
    this.router.navigate(['/login'])
  }

  isAuth() {
    return this.isAuthenticated
  }

  private authSuccesfully() {
    this.isAuthenticated = true
    this.authChange.next(true)
    this.router.navigate(['learning/subject'])
  }
}
