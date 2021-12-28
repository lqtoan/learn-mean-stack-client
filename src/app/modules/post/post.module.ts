import { PostRoutingModule } from './post-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [PostListComponent],
  imports: [CommonModule, PostRoutingModule],
})
export class PostModule {}
