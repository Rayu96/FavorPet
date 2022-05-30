import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/pets/interfaces/pet.interface';

@Component({
  selector: 'app-user-pet',
  templateUrl: './user-pet.component.html',
  styleUrls: ['./user-pet.component.scss'],
})
export class UserPetComponent implements OnInit {
  @Input() pet!: Pet;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate() {
    console.log(this.router.navigateByUrl(`/pets/${this.pet.id}`));
  }
}
