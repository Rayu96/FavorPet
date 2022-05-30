import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/pet.interface';
import { PetsService } from '../../services/pets.service';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent implements OnInit {
  pets: Pet[] = [];
  isLoading: boolean = true;

  constructor(
    private petsService: PetsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getPets();

    const myauth = getAuth();
    onAuthStateChanged(myauth, (user) => {
      if (user) {
        console.log(user);
        this.authService.currentUserId.emit(true);
      } else {
        console.log('no logeado');
      }
    });
  }

  getPets() {
    this.petsService.getPets().subscribe((pets) => {
      this.pets = pets;
      this.isLoading = false
    });
  }
}
