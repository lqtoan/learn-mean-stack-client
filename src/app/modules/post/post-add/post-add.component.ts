import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { Post } from 'src/app/models/post';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss'],
})
export class PostAddComponent implements OnInit {
  post: Post;
  newPost: FormGroup;

  private POST_API = `${environment.API}posts`;
  constructor(
    private httpService: HttpService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newPost = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.maxLength(180)]],
      // image: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    this.httpService
      .post(this.POST_API, this.newPost.value)
      .subscribe((res) => {
        console.log(res);
        if (res.success) {
          alert(res.message);
          this.router.navigate(['/post']);
          this.newPost.reset();
        }
      });
  }
}
