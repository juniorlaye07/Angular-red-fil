import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
      resp => console.log(resp),
      err => {
        console.log(err)
      });
  }
  BloquerParten(id){
    this.partenService.BlocPart(id).subscribe(
      resp => { console.log(resp)
        this.ngOnInit()
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
    document.getElementById('cote').style.display = 'none';
  }
 
}