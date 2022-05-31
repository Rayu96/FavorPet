import { Component, OnInit, ViewChild } from '@angular/core';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { User } from 'src/app/auth/interfaces/user';
import { UserService } from 'src/app/auth/services/user.service';
import { map } from 'rxjs/operators';
import { PetsService } from 'src/app/pets/services/pets.service';
import { Pet } from 'src/app/pets/interfaces/pet.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MatTabGroup } from '@angular/material/tabs';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  myauth = getAuth();
  myProfile!: User;
  myPets: Pet[] = [];

  @ViewChild('tabs') tabGroup!: MatTabGroup;
  showEditPage: boolean = false;
  showEditPet: boolean = false;

  updateProfileForm!: FormGroup;

  constructor(
    private usersService: UserService,
    private petsService: PetsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Get users
    this.usersService.getUsers().subscribe((res) => {
      console.log(res);
    });

    // Verify if a user is logged in
    onAuthStateChanged(this.myauth, (user) => {
      const id = user?.uid;

      if (id) {
        // Emit if user is login
        //this.authService.usserLoggedIn.emit(true);

        // Get user info
        this.usersService
          .getUserById(id)
          .pipe(map((res) => res.filter((pet) => pet.uid === id)))
          .subscribe((res) => {
            this.myProfile = res[0];

            this.updateProfileForm = new FormGroup({
              name: new FormControl(this.myProfile.name),
              lastname: new FormControl(this.myProfile.lastname),
              location: new FormControl(this.myProfile.location),
              phone: new FormControl(this.myProfile.phone),
              email: new FormControl(this.myProfile.email),
              description: new FormControl(this.myProfile.aboutMe),
            });
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

  mattabInfo() {
    this.showEditPage = true;
    this.tabGroup.selectedIndex = 2;
  }

  updateProfile() {
    Swal.fire({
      icon: 'question',
      text: '¿Estás seguro que deseas actualizar tu perfil?',
      showCancelButton: true,
      confirmButtonText: 'Si, quiero actualizarlo!',
      cancelButtonText: 'Quizás más tarde',
      reverseButtons: true,
      confirmButtonColor: '#F2B84B',
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          title: '¡Tu perfil ha sido actualizado!',
          icon: 'success',
          confirmButtonText: 'OK!',
          confirmButtonColor: '#F2B84B',
        }).then((res) => {
          if (res.isConfirmed) {
            //Upload pet
            console.log(this.updateProfileForm.value);
            //this.cancelUpdate();
          }
        });
      }
    });
  }

  updatePetProfile() {
    Swal.fire({
      icon: 'question',
      text: '¿Estás seguro que deseas actualizar la información de tu mascota?',
      showCancelButton: true,
      confirmButtonText: 'Si, quiero actualizarla!',
      cancelButtonText: 'Quizás más tarde',
      reverseButtons: true,
      confirmButtonColor: '#F2B84B',
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          title: '¡La información de tu mascota ha sido actualizada!',
          icon: 'success',
          confirmButtonText: 'OK!',
          confirmButtonColor: '#F2B84B',
        }).then((res) => {
          if (res.isConfirmed) {
            //Upload pet
            console.log('Actualizando');
            this.cancelPetUpdate();
          }
        });
      }
    });
  }

  cancelUpdate() {
    this.showEditPage = false;
    this.tabGroup.selectedIndex = 0;
  }

  cancelPetUpdate() {
    this.showEditPet = false;
    this.tabGroup.selectedIndex = 1;
  }

  getPetId(id: string) {
    this.showEditPet = true;
    this.tabGroup.selectedIndex = 3;
    console.log('Estamos en el : ', id);
  }
}
