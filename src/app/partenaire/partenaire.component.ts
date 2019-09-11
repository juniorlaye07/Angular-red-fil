import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import {  PartenaireService } from '../services/partenaire.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



declare var $;

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss'],
})
export class PartenaireComponent implements OnInit {
  
  Partenaires:any = [];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  imgUrl = '/assets/img/user.jpg';
  imgeUpload: File = null;

  constructor(private partenService: PartenaireService, private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.partenService.getPartenaire().subscribe(
        resp => this.Partenaires= resp,
        err => {
          console.log(err)
    });
  }
 
  CreatCompte(ComptForm:any){
    this.partenService.AddCompte(ComptForm).subscribe(
      resp => { console.log(resp)
       if (resp.msg2) {
      Swal.fire(resp.msg2)
      }  
      err =>
        console.log(err)
      });
  }
  BloquerParten(id){
    this.partenService.BlocPart(id).subscribe(
      resp => { console.log(resp)
        this.ngOnInit()
        if (resp.messge10) {
          Swal.fire(resp.messge10)
        } 
      },
      err => {
        console.log(err) 
      });
  }
  Contrat(){
    this.partenService.ContratPresta().subscribe(
      resp => console.log(resp),
      err => {
        console.log(err)
      });
  }
  compte(){
    document.getElementById('compt-parten').style.display = 'none';
  }
 
}