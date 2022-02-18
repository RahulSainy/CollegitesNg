import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  constructor(private db: AngularFireDatabase) { }

  // getCategories() {
  //   return this.db.list('/categories', ref => ref.orderByChild('name')).valueChanges();
  //   // this means we want Firebase to order our categories by this child property
  // tslint:disable-next-line:max-line-length
  //   // the above line without the valueChanges() method returns an AngularFireList object and we need an observable so we can subscribe to it or get the data in our template with the async pipe and valueChanges() does exactly that, returns an observable
  // }

  getCategories() {
    return this.db.list('/ProductCategories',ref => ref.orderByChild('name')).snapshotChanges()
    .pipe(map(data => {
      return data.map(action => {
        const $key = action.payload.key;
        const data = action.payload.val();
        return data;
      });
    }));;
    }


  // tslint:disable-next-line:max-line-length
  // since valueChanges() doesn't return meta-data, to get the unique IDs of the items in our collection we need to use snapshotChanges() instead
}