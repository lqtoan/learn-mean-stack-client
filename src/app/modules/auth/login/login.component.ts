import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User;
  userAccount: FormGroup;

  private AUTH_API = `${environment.API}auth/login`;
  constructor(
    private httpService: HttpService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userAccount = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    this.httpService
      .post(this.AUTH_API, this.userAccount.value as User)
      .subscribe((res) => {
        console.log(res);
        if (res.success === true) {
          alert(res.message);
          this.router.navigate(['/post']);
          sessionStorage.setItem('accessToken', res.accessToken);
        } else {
          alert(res.message);
        }
      });
  }
}
