import { PostRoutingModule } from './post-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post.component';
import { PostAddComponent } from './post-add/post-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostListComponent, PostComponent, PostAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostRoutingModule,
    HttpClientModule,
  ],
})
export class PostModule {}
