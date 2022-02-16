import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
// import * as firebase from 'firebase/compat';
@Component({
  selector: 'app-ecommerce-login',
  templateUrl: './ecommerce-login.component.html',
  styleUrls: ['./ecommerce-login.component.css'],
})
export class EcommerceLoginComponent implements OnInit {
  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit(): void {}

  login() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
}
