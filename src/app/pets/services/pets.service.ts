import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../interfaces/pet.interface';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Get all pets
  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.baseUrl}/pets`);
  }

  // Get single pet by id
  getPetById(id: string): Observable<Pet> {
    return this.http.get<Pet>(`${this.baseUrl}/pets/${id}`);
  }
}
