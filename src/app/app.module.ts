import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostModule } from './modules/post/post.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, PostModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
