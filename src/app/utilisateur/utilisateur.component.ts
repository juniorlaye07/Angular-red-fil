import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { UsersService } from '../services/users.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
 
  Users: any = [];

  constructor(private serviceUse: UsersService, private UserService: UtilisateurService, private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {
   
    this.UserService.getUser().subscribe(
      response => this.Users= response
      ,err => {
        console.log(err)
      });
  }
//=====================Bloquer User=========================£
  BloquerUser(id){
    this.UserService.BlocUser(id).subscribe(
      
      resp => { console.log(resp)
      this.ngOnInit()
        if (resp.mesag12) {
          Swal.fire(resp.mesag12)
        }},
      err => {
        console.log(err)
      });
  }
//==========================Allouer un compte===============£
  Alcompte(id){
    this.UserService.AllouCompt(id).subscribe(
      resp => { console.log(resp)
      this.ngOnInit()
        if (resp.messages9) {
          Swal.fire(resp.messages9)
        }
      },
      err => {
        console.log(err)
        
      });
  }
//=============================£============================£
}
