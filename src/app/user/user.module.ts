import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserPetComponent } from './components/user-pet/user-pet.component';

@NgModule({
  declarations: [UserProfileComponent, UserPetComponent],
  imports: [CommonModule],
})
export class UserModule {}
