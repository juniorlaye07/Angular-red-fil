import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UtilisateurService } from '../services/utilisateur.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  Users: any = [];
  imageUrl = 'assets/img/user.jpg';
  imgUpload: File = null;
  constructor(private UserService: UtilisateurService, private router: Router, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  //=======================Ajouter Image=======================£
  onFileUpload(file: FileList) {
    this.imgUpload = file.item(0);
    console.log(this.imgUpload = file.item(0));
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.imgUpload);
  }
//==============================================================£
  AddUser(userForm: any) {
    console.log(userForm);
    this.UserService.AjoutUser(userForm, this.imgUpload).subscribe(
      resp => {
        
        console.log(resp)
        if (resp.massages8) {
          Swal.fire(resp.massages8)
        }
        this.router.navigate(['/utilisateur'])
        
      err => {
        console.log(err)
        if (err.error.messages7) {
          Swal.fire(err.error.messages7)
        }
      }      
    });
  }

}
