
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class PartenaireService {

    Headers = { headers: new HttpHeaders().set("Authorization", "Bearer " +localStorage.getItem('token')) };

    public hostParten = "http://127.0.0.1:8000/api/listeParten/2";
    public hostUpPar = "http://127.0.0.1:8000/api/bloquerparten/";
    public hostUpComptPar = "http://127.0.0.1:8000/api/compte";
    public hostContra     = "http://127.0.0.1:8000/api/contrat";

    constructor(private http: HttpClient) { }

//===================Lister Partenaires============================£
    getPartenaire(): Observable<any> {
        return this.http.get(this.hostParten, this.Headers);
    }
//=====================Ajouter Partenaires=========================£
    AjoutParten(partVar: any, imgeUpload): Observable<any> {
        const formData: FormData = new FormData();
        const header = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
        const hostAjPar = "http://127.0.0.1:8000/api/partenaire";

        formData.append('ninea', partVar.ninea);
        formData.append('raison_social', partVar.raison_social);
        formData.append('adresse', partVar.adresse);
        formData.append('email', partVar.email);
        formData.append('telephone', partVar.telephone);
        formData.append('nom', partVar.nom);
        formData.append('prenom', partVar.prenom);
        formData.append('username', partVar.username);
        formData.append('plainPassword', partVar.plainPassword);
        formData.append('imageName', imgeUpload, imgeUpload.name);
        formData.append('telephone', partVar.telephone);

        console.log(formData)
        return this.http.post(hostAjPar, formData, { headers: header });  
          }
//=====================Bloquer un Partenaire=======================£
    BlocPart(id): Observable<any> { 
        return this.http.get(this.hostUpPar+id, this.Headers);
    }
//======================Allouer un compte==========================£
    AddCompte(upcompt:any): Observable<any> {
        return this.http.post(this.hostUpComptPar, upcompt, this.Headers);
    }
//======================Generer un contrat=========================£
    ContratPresta(): Observable<any> {
        return this.http.get(this.hostContra, this.Headers);
    }
//===========================£======================================£
}

