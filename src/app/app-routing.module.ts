import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'post',
    loadChildren: () =>
      import('./modules/post/post.module').then((m) => m.PostModule),
  },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
