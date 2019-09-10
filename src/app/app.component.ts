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

  ngOnInit(): void {
    this.authenticationService.loadToken();
    console.log(this.authenticationService.isAuthenticated());
    this.router.navigate(["/login"]);
  }
  isSuperAdminSystem() {
    return this.authenticationService.isSuperAdminSystem();
  }
  isAdminPartenaire() {
    return this.authenticationService.isAdminPartenaire();
  }
  isAuthenticated(){
    this.authenticationService.isAuthenticated();
  }
  // logout() {
  //   // remove user from local storage to log user out
  //   this.authenticationService.logout();
  //   localStorage.removeItem('currentUser');
    
  // }

}
