import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  accessToken: String = sessionStorage.getItem('accessToken');
  constructor(private httpClient: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + this.accessToken,
    }),
  };

  public get(url: string): Observable<any> {
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public post(url: string, payload: any): Observable<any> {
    return this.httpClient.post<any>(url, payload, this.httpOptions);
  }
}
