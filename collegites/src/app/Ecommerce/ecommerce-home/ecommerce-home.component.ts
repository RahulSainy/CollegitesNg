import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
@Component({
  selector: 'app-ecommerce-home',
  templateUrl: './ecommerce-home.component.html',
  styleUrls: ['./ecommerce-home.component.css']
})
export class EcommerceHomeComponent {
 user:firebase.User
  constructor(private afAuth:AngularFireAuth) { 
    afAuth.authState.subscribe(user=> user =user)
  }

  logout(){
this.afAuth.signOut();
  }
}
