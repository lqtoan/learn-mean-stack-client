import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';

const postRoutes = [{ path: 'post', component: PostListComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(postRoutes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
