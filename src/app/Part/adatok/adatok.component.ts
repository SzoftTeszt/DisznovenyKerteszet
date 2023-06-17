import { Component } from '@angular/core';
import { map } from 'rxjs';
import { BaseService } from 'src/app/Service/base.service';

@Component({
  selector: 'app-adatok',
  templateUrl: './adatok.component.html',
  styleUrls: ['./adatok.component.css']
})
export class AdatokComponent {
  novenyek:any;
  ujNoveny:any={}

  megrendelesek:any;
  
  oszlopok=["megnevezes", "ar"]

  constructor(private base:BaseService){
    this.base.getNoveny().snapshotChanges().pipe(
      map( ch=>ch.map(c=>({key:c.payload.key, ...c.payload.val()}) ))
    ).subscribe(
      (adatok) => this.novenyek=adatok
    )
    this.base.getMegrendeles().snapshotChanges().pipe(
      map( ch=>ch.map(c=>({key:c.payload.key, ...c.payload.val()}) ))
    ).subscribe(
      (adatok) => {this.megrendelesek=adatok, console.log(this.megrendelesek)}
    )
  }

  add(){
    this.base.addNoveny(this.ujNoveny);
    this.ujNoveny={};
  }
  delete(body:any){
    this.base.deleteNoveny(body);
  }
  update(body:any){
    this.base.updateNoveny(body);
  }
 
}
