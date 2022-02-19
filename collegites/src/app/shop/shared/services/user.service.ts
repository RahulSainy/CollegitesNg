import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import { AppUser } from '../models/app-user';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string): Observable<AppUser | unknown> { 
    return this.db.object('/users/' + uid).valueChanges();
  }
}
