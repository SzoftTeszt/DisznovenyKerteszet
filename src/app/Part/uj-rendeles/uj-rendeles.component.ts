import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Noveny } from 'src/app/Model/noveny';
import { BaseService } from 'src/app/Service/base.service';

@Component({
  selector: 'app-uj-rendeles',
  templateUrl: './uj-rendeles.component.html',
  styleUrls: ['./uj-rendeles.component.css']
})
export class UjRendelesComponent {
  novenyek:any;
  ujMegrendeles:any={};
  ujTetel:any={}
  
  oszlopok=["megnevezes", "ar"]

  constructor(private base:BaseService, private router:Router){
    this.base.getNoveny().snapshotChanges().pipe(
      map( ch=>ch.map(c=>({key:c.payload.key, ...c.payload.val()}) ))
    ).subscribe(
      (adatok) => this.novenyek=adatok
    )
  
  }

  addMegrendeles(body:any){
    body.statusz="Folyamatban";
    this.base.addMegrendeles(body).then( ()=>
        this.router.navigate(['/adatok'])
    )
  }

  addTetel(body:any){
    
    if (!this.ujMegrendeles.rendeles) this.ujMegrendeles.rendeles=[];
    const tetel:any={};
    tetel.novenyKey=body.novenyKey;
    tetel.db=body.db;
    
    this.ujMegrendeles.rendeles.push(tetel);
    this.ujTetel={};
  }

  keres(key:string)  {
    return (this.novenyek as Noveny[]).
            findIndex( (adat) =>adat.key==key);
  }
}
