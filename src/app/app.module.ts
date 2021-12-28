import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './modules/post/post-list/post-list.component';
import { PostModule } from './modules/post/post.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PostModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
