import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/post';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  accessToken: string = sessionStorage.getItem('accessToken');
  private POST_API = `${environment.API}posts`;
  constructor(private httpClient: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + this.accessToken,
    }),
  };

  public getPosts(): Observable<any> {
    const url = `${this.POST_API}`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public addPost(payload: Post): Observable<any> {
    const url = `${this.POST_API}`;
    return this.httpClient.post<any>(url, payload, this.httpOptions);
  }

  public deletePost(id: any): Observable<any> {
    const url = `${this.POST_API}/${id}`;
    return this.httpClient.delete(url, this.httpOptions);
  }
}
