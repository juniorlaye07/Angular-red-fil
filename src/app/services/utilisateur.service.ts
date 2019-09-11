import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  Headers = { headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token')) };
  
  public hostUser = "http://127.0.0.1:8000/api/listeUsers";
  public hotAjout = "http://127.0.0.1:8000/api/form";
  public hostUpCompt = "http://127.0.0.1:8000/api/UpdateCompte/";
  public hostBloc = "http://127.0.0.1:8000/api/BloqueUser/";
  public hostUpUser = "http://127.0.0.1:8000/api/"

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get(this.hostUser, this.Headers);
  }
  
  AjoutUser(userVar:any,imgUpload): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('nom', userVar.nom);
    formData.append('prenom', userVar.prenom);
    formData.append('telephone', userVar.telephone);
    formData.append('plainPassword', userVar.plainPassword);
    formData.append('profil',userVar.profil);
    formData.append('imageName', imgUpload, imgUpload.name);
    formData.append('username', userVar.username);
    console.log(formData)

    return this.http.post(this.hotAjout, formData, this.Headers);
  }

  BlocUser(id):Observable<any> {
    return this.http.get(this.hostBloc+id, this.Headers)
  }

  AllouCompt(id): Observable<any> {
    return this.http.get(this.hostUpCompt+id, this.Headers)
  }

  UpdateUser(): Observable<any>{
    return this.http.get(this.hostUpUser , this.Headers)
  }

}
