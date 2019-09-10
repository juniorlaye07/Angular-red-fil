import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  Headers = { headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token')) };

  public hostUser = "http://127.0.0.1:8000/api/listusers";


  constructor(private http: HttpClient) { }
  getUser(): Observable<any> {
    return this.http.get(this.hostUser, this.Headers);
  }
}
