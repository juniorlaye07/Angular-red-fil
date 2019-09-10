import { Component, OnInit } from '@angular/core';
import { CaisierService } from '../services/caisier.service';

@Component({
  selector: 'app-caisier',
  templateUrl: './caisier.component.html',
  styleUrls: ['./caisier.component.scss']
})
export class CaisierComponent implements OnInit {
  infos = []
  
  constructor(private caisierService: CaisierService ){}

  ngOnInit(){}

  FairDepot(DepoForm: any){
    this.caisierService.Depot(DepoForm).subscribe(
      infos=>{
        this.infos=infos;
        console.log(this.infos)
      },
      
      err => {
        console.log(err)
      });
  }
}
