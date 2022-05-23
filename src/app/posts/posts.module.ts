import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './pages/posts/posts.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [PostsComponent, PetCardComponent],
  imports: [CommonModule, PostsRoutingModule, MaterialModule],
})
export class PostsModule {}
