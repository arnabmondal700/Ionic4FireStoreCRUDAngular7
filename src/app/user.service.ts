import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from './user';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private responseSource = new BehaviorSubject<any>([]);
  users = this.responseSource.asObservable();
  constructor(private firestore: AngularFirestore) {
    this.getUserData();
  }
  getUserData() {
    this.firestore.collection('user').snapshotChanges().subscribe(
      (res) => this.responseSource.next(res),
      (err) => console.log(err),
      () => console.log('done!')
    );
  }
}
