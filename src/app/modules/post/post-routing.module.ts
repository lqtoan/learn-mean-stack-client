import { PostComponent } from './post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostAddComponent } from './post-add/post-add.component';

const postRoutes: Routes = [
  {
    path: '',
    component: PostComponent,
    children: [
      { path: '', component: PostListComponent },
      { path: 'add', component: PostAddComponent },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(postRoutes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
