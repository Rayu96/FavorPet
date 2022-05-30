import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../../interfaces/pet.interface';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss'],
})
export class PetDetailComponent implements OnInit {
  pet!: Pet;
  isLoading = true;

  ageMap = {
    '=1': 'año',
    other: 'años',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private petsService: PetsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.petsService.getPetById(id).subscribe((pet) => {
        this.pet = pet;
        this.isLoading = false;
      });
    });
  }
}
