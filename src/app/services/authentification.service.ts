import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({ providedIn: 'root' })
export class AuthentificationService {

  jwttoken: string;
  username: string;
  id: number;
  roles: Array<string>;
  currentUserValue: any;
  numeroCompte:any;
  partenaire:any;


  constructor(private http: HttpClient) {}

  login(data) {
    return this.http.post("http://localhost:8000/api/login", data, { observe: 'response' })
  }

  saveToken(jwttoken: any) {
    localStorage.setItem('token', jwttoken['token']);
    this.jwttoken = jwttoken['token']
    this.parseIWT();
  }
  parseIWT(){
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwttoken);
    console.log(objJWT)
    this.username = objJWT.username;
    this.roles = objJWT.roles;
    this.id = objJWT.id;
    this.numeroCompte= objJWT.numeroCompte;
    this.partenaire=objJWT.partenaire;
    console.log(this.numeroCompte);
    console.log(this.username);
    console.log(this.roles);
    console.log(this.partenaire);
    console.log(this.id);


   
  }
  
  loadToken() {
    this.jwttoken = localStorage.getItem('token');
    this.parseIWT();
  }

  isSuperAdminSystem() {
    return this.roles.indexOf('ROLE_SUPER_ADMIN')>= 0;
  }
  isAdminPartenaire() {
    return this.roles.indexOf('ROLE_ADMIN_PRS')>= 0;
  }
  isCaisier() {
    return this.roles.indexOf('ROLE_CAISIER')>= 0;
  }
  isUser() {
    return this.roles.indexOf('ROLE_USERs')>= 0;
  }

  initParametre() {
    this.jwttoken = undefined;
    this.roles = undefined;
    this.username = undefined;
  }
  isAuthenticated() {
    return this.roles && (this.isSuperAdminSystem()|| this.isAdminPartenaire() || this.isCaisier() || this.isUser());
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('jwttoken');
    this.initParametre();
  }

}
