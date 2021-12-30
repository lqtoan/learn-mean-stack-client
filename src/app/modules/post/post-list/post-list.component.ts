import { environment } from './../../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  private POST_API = `${environment.API}posts`;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.get(this.POST_API).subscribe((res) => {
      if (res && res.success) {
        console.log(res.data);
        this.posts = res.data;
      } else {
        alert(res.message);
      }
    });
    // this.postService.getPosts().subscribe((res) => {
    //   this.posts = res;
    // });
  }

  deletePost() {
    // this.httpService.delete(this.POST_API, )
  }
}
