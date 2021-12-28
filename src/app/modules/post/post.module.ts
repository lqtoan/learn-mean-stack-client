import { PostRoutingModule } from './post-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post.component';
import { PostAddComponent } from './post-add/post-add.component';

@NgModule({
  declarations: [PostListComponent, PostComponent, PostAddComponent],
  imports: [CommonModule, PostRoutingModule, HttpClientModule],
})
export class PostModule {}
