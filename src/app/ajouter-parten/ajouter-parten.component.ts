import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PartenaireService } from '../services/partenaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-parten',
  templateUrl: './ajouter-parten.component.html',
  styleUrls: ['./ajouter-parten.component.css']
})
export class AjouterPartenComponent implements OnInit {
  Partenaires: any = [];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  imgUrl = '/assets/img/user.jpg';
  imgeUpload: File = null;

  constructor(private partenService: PartenaireService, private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  onFilleUpload(file: FileList) {
    this.imgeUpload = file.item(0);
    console.log(this.imgeUpload = file.item(0));
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imgUrl = event.target.result;
    }
    reader.readAsDataURL(this.imgeUpload);
  }
  AddParten(PartenForm: any) {
    resp => console.log(PartenForm);
    this.partenService.AjoutParten(PartenForm, this.imgeUpload).subscribe(
      resp => console.log(resp),
      err => {
        console.log(err)
      });
  }

}
