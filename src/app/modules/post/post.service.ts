import { HttpService } from './../../core/services/http.service';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/post';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[];

  private POST_API = `${environment.API}posts`;
  constructor(private httpService: HttpService) {}

  getPosts(): void {
    this.httpService.get(this.POST_API).subscribe((res) => {
      if (res) {
        this.posts = res.data as Post[];
      }
    });
  }
}
