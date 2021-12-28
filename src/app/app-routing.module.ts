import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './modules/post/post-list/post-list.component';

const routes: Routes = [
  { path: 'post', component: PostListComponent },
  {
    path: '',
    redirectTo: 'post',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
