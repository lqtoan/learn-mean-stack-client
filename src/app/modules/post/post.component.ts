import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  backToList(): void {
    this.router.navigate(['/post']);
  }
}
