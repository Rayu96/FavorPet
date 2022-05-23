import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getPets() {
    return this.http.get<Pet[]>(`${this.baseUrl}/pets`);
  }
}
