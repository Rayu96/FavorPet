import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserProfileComponent } from './user/pages/user-profile/user-profile.component';
import { ErrorComponent } from './shared/pages/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'pets',
    loadChildren: () => import('./pets/pets.module').then((m) => m.PetsModule),
  },
  {
    path: 'user/:id',
    component: UserProfileComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
