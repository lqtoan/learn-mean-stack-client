import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  accessToken = sessionStorage.getItem('accessToken');

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
