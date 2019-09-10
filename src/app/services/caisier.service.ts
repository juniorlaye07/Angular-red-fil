import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaisierService {
  
  Headers = { headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token')) };

  public hostCaise = "http://127.0.0.1:8000/api/depot";

  constructor(private http: HttpClient) { }
  
  Depot(depVar: any): Observable<any> {
    
    const formData: FormData = new FormData();

    console.log(Headers);
    formData.append('montant', depVar.montant);
    formData.append('Numero', depVar.Numero);
      
    console.log(formData)

    return this.http.post(this.hostCaise, formData, this.Headers);
  }
}
