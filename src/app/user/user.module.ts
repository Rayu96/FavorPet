import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserPetComponent } from './components/user-pet/user-pet.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserProfileComponent, UserPetComponent, MyProfileComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class UserModule {}
