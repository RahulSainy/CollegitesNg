import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, DocumentData, CollectionReference, onSnapshot, QuerySnapshot } from 'firebase/firestore'
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  db: Firestore;
  postCol: CollectionReference<DocumentData>;
  private updatedSnapshot = new Subject<QuerySnapshot<DocumentData>>();
  obsr_UpdatedSnapshot = this.updatedSnapshot.asObservable();

  constructor() {
    initializeApp(environment.firebase);
    this.db = getFirestore();
    this.postCol = collection(this.db, '/posts');

    // Get Realtime Data
    onSnapshot(this.postCol, (snapshot) => {
      this.updatedSnapshot.next(snapshot);
    }, (err) => {
      console.log(err);
    })
  }

  async getposts() {
    const snapshot = await getDocs(this.postCol);
    return snapshot;
  }


  async addpost(msg: string, img: string) {
    await addDoc(this.postCol, {
      msg,
      img
    })
    return;
  }

  async deletepost(id: string) {
    const docRef = doc(this.db, 'posts', id)
    await deleteDoc(docRef);
    return;
  }

  async updatepost(id: string, msg: string, img: string) {
    const docRef = doc(this.db, 'posts', id);
    await updateDoc(docRef, { msg, img })
    return;
  }
}