import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  Trans: any = [];

  constructor(private transervice: TransactionService, private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.transervice.transac().subscribe(
      resp => this.Trans = resp,
      err => {
        console.log(err)
      });
  }   
}
