import { Component, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/pet.interface';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private petsService: PetsService) {}

  ngOnInit(): void {
    this.getPets();
  }

  getPets() {
    this.petsService.getPets().subscribe((pets) => {
      this.pets = pets;
    });
  }
}
