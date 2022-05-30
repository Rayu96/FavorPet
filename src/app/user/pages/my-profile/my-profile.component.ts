import { Component, OnInit } from '@angular/core';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { User } from 'src/app/auth/interfaces/user';
import { UserService } from 'src/app/auth/services/user.service';
import { map } from 'rxjs/operators';
import { PetsService } from 'src/app/pets/services/pets.service';
import { Pet } from 'src/app/pets/interfaces/pet.interface';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  myauth = getAuth();
  myProfile!: User;
  myPets: Pet[] = [];

  constructor(
    private usersService: UserService,
    private petsService: PetsService
  ) {}

  ngOnInit(): void {
    onAuthStateChanged(this.myauth, (user) => {
      const id = user?.uid;
      console.log(id);

      if (id) {
        this.usersService
          .getUserById(id)
          .pipe(map((res) => res.filter((pet) => pet.uid === id)))
          .subscribe((res) => {
            this.myProfile = res[0];
          });

        this.petsService
          .getAllPets()
          .pipe(map((res) => res.filter((pet) => pet.ownerId === id)))
          .subscribe((res) => {
            this.myPets = res;
          });
      }
    });
  }
}
