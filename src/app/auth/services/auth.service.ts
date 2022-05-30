import { EventEmitter, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  // current user
  usserLoggedIn = new EventEmitter(false);
  currentUserUid = new EventEmitter();

  // Register new user user with email
  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Login into the page
  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Logout
  logout() {
    return signOut(this.auth);
  }
}
