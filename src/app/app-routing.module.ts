import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserProfileComponent } from './user/pages/user-profile/user-profile.component';
import { ErrorComponent } from './shared/pages/error/error.component';
import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { UnauthorizedComponent } from './shared/pages/unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    ...canActivate(() => redirectLoggedInTo('/pets')),
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
    path: '403',
    component: UnauthorizedComponent,
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
