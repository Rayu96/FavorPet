import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Pet } from '../interfaces/pet.interface';
import {
  addDoc,
  collectionData,
  doc,
  docData,
  Firestore,
} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private firestore: Firestore) {}

  // Json-Server Tests
  // Get all pets
  /*   getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.baseUrl}/pets`);
  }

  // Get single pet by id
  getPetById(id: string): Observable<Pet> {
    return this.http.get<Pet>(`${this.baseUrl}/pets/${id}`);
  } */

  //Firebase
  addPet(pet: Pet) {
    const petsRef = collection(this.firestore, 'pets');
    return addDoc(petsRef, pet);
  }

  getAllPets(): Observable<Pet[]> {
    const petsRef = collection(this.firestore, 'pets');
    return collectionData(petsRef, { idField: 'id' }) as Observable<Pet[]>;
  }

  getPetById(id: string): Observable<Pet> {
    const petsRef = doc(this.firestore, `pets/${id}`);
    return docData(petsRef, { idField: 'id' }) as Observable<Pet>;
  }
}
