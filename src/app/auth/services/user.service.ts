import { Injectable } from '@angular/core';
import { addDoc, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: Firestore) {}

  addUser(user: User) {
    const userRef = collection(this.firestore, 'users');
    return addDoc(userRef, user);
  }
}
