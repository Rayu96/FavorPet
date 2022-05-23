import { Component, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/interfaces';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  petsList: Pet[] = [];

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.getPets();
  }

  getPets() {
    this.petService.getPets().subscribe((pets) => {
      this.petsList = pets;
    });
  }
}
