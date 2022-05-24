import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { PetsComponent } from './pages/pets/pets.component';
import { MaterialModule } from '../material/material.module';
import { PetDetailComponent } from './pages/pet-detail/pet-detail.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PetImgPipe } from './pipes/pet-img.pipe';
import { PetKindPipe } from './pipes/pet-kind.pipe';
import { AddPetComponent } from './pages/add-pet/add-pet.component';

@NgModule({
  declarations: [
    PetCardComponent,
    PetsComponent,
    PetDetailComponent,
    ToolbarComponent,
    PetImgPipe,
    PetKindPipe,
    AddPetComponent,
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class PetsModule {}
