import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetComponent } from './pages/add-pet/add-pet.component';
import { PetDetailComponent } from './pages/pet-detail/pet-detail.component';
import { PetsComponent } from './pages/pets/pets.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PetsComponent,
      },
      {
        path: 'add',
        component: AddPetComponent,
      },
      {
        path: ':id',
        component: PetDetailComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsRoutingModule {}
