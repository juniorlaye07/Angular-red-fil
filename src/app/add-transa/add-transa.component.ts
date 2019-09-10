import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-transa',
  templateUrl: './add-transa.component.html',
  styleUrls: ['./add-transa.component.css']
})
export class AddTransaComponent implements OnInit {

  Trans: any = [];

  constructor(private transervice: TransactionService, private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {}

  TransUser(transform) {
    resp => console.log(transform);
    this.transervice.FaireTransac(transform).subscribe(
      resp => { this.router.navigate['transaction']
        console.log(resp)},
      err => {
        console.log(err)
      }); 
  }
  group1() {
    document.getElementById('env1').style.display = 'block';
    document.getElementById('env2').style.display = 'block';
    document.getElementById('env3').style.display = 'block';
    document.getElementById('env4').style.display = 'block';
    document.getElementById('ret1').style.display = 'block';
    document.getElementById('ret2').style.display = 'block';
    document.getElementById('ret3').style.display = 'block';
    document.getElementById('ret4').style.display = 'block';
    document.getElementById('ret5').style.display = 'none';
    document.getElementById('env5').style.display = 'none';

  }
  group2() {
    document.getElementById('env5').style.display = 'block';
    document.getElementById('ret5').style.display = 'block';

    document.getElementById('env1').style.display = 'none';
    document.getElementById('env2').style.display = 'none';
    document.getElementById('env3').style.display = 'none';
    document.getElementById('env4').style.display = 'none';
    document.getElementById('ret1').style.display = 'none';
    document.getElementById('ret2').style.display = 'none';
    document.getElementById('ret3').style.display = 'none';
    document.getElementById('ret4').style.display = 'none';
  }

}
