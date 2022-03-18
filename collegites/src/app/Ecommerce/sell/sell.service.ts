import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class SellService {
  imageDetailList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getImageDetailList() {
    this.imageDetailList = this.firebase.list('SellDetails', ref => ref.orderByChild("img"));
  }

  insertImageDetails(imageDetails: any) {
    this.imageDetailList.push(imageDetails);
  }
}