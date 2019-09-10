import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  Headers = { headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token')) };

  public hostransa = "http://127.0.0.1:8000/api/transaction";
  public hostlistra = "http://127.0.0.1:8000/api/listransac";

  constructor(private http: HttpClient) {}

  transac(): Observable<any> {
    return this.http.get(this.hostlistra, this.Headers);
  }
  FaireTransac(transac): Observable<any> {
    return this.http.post(this.hostransa, transac, this.Headers);
  }
}
