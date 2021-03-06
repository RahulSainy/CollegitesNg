import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imageDetailList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getImageDetailList() {
    this.imageDetailList = this.firebase.list('postsDetails', ref => ref.orderByChild("catergory"));
  }


  insertImageDetails(imageDetails: any) {
    this.imageDetailList.push(imageDetails);
  }
}