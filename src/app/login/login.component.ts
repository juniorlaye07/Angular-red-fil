import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { AuthentificationService } from '../services/authentification.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router,private authenticationService: AuthentificationService) { }

  ngOnInit() {}
  
  isSuperAdminSystem() {

    return this.authenticationService.isSuperAdminSystem();
  }
  isAdminPartenaire() {

    return this.authenticationService.isAdminPartenaire();
  }
  isCaisier() {
    return this.authenticationService.isCaisier();
  }
  isUser() {
    return this.authenticationService.isUser();
  }
  isAuthenticated(){

  }

  onLogin(data: any){
     this.authenticationService.login(data)
     .subscribe(resp=>{
         let jwttoken:any = resp.body
         this.authenticationService.saveToken(jwttoken);
          if (this.isSuperAdminSystem()) {
            this.router.navigate(["/partenaire"]);
          }
          else if (this.isAdminPartenaire()) {
            this.router.navigateByUrl("/utilisateur");
          }
          else if (this.isCaisier()) {
            this.router.navigate(["/caisier"]);
          }
          else if (this.isUser()) {
            this.router.navigate(["/addTransa"]);
          }
          else{
            this.router.navigate(["/login"]);
          }
        },
       err => {
         console.log(err)
         if (err.error.messages1) {
           Swal.fire(err.error.messages1)
         }
         if (err.error.messages2) {
           Swal.fire(err.error.messages2)
         }
         if (err.error.messages3) {
           Swal.fire(err.error.messages3)
         }
         if (err.error.messages4) {
           Swal.fire(err.error.messages4)
         }
         if (err.error.messages5) {
           Swal.fire(err.error.messages5)
         }
         if (err.error.messages6) {
           Swal.fire(err.error.messages6)
         }
       })
  }
}