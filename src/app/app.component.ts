import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = '';
  
  constructor(private router: Router,private authenticationService: AuthentificationService){}

   ngOnInit(){
  
    this.router.navigate(["/login"]);
  }
  isSuperAdminSystem() {
    return this.authenticationService.isSuperAdminSystem();
  }
  isAdminPartenaire() {
    return this.authenticationService.isAdminPartenaire();
  }
  isAuthenticated(){
    return this.authenticationService.isAuthenticated();
  }
  isCaisier() {
    return this.authenticationService.isCaisier();
  }
  isUser() {
    return this.authenticationService.isUser();
  }
  logout() {
    
    this.authenticationService.logout();
   
  }

}
