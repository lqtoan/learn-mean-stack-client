import { switchMap, map } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  // private POST_API = `${environment.API}posts`;
  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((res) => {
      if (res && res.success) {
        console.log(res.data);
        this.posts = res.data as Post[];
      } else {
        alert(res.message);
      }
    });
  }

  delete(id: string) {
    if (confirm('Are you sure you want to delete this post?')) {
      this.postService.deletePost(id).subscribe((data) => {
        if (data.success) {
          alert('Delete successfully');
          window.location.reload();
        }
      });
    }
  }
}
