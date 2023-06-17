import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Noveny } from '../Model/noveny';
import { Megrendeles } from '../Model/megrendeles';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  refNoveny:AngularFireList<Noveny>
  refMegrendeles:AngularFireList<Megrendeles>
  constructor(private db:AngularFireDatabase) {
     this.refNoveny=this.db.list('/Novenyek');
     this.refMegrendeles=this.db.list('/Megrendeles');
   }

  getNoveny(){
    return this.refNoveny;
  }

  addNoveny(body:any){
    return this.refNoveny.push(body)
  }

  updateNoveny(body:any){
    return this.refNoveny.update(body.key,body);
  }

  deleteNoveny(body:any)
  {
    return this.refNoveny.remove(body.key);
  }
  getMegrendeles(){
    return this.refMegrendeles;
  }

  addMegrendeles(body:any){
    return this.refMegrendeles.push(body)
  }

  updateMegrendeles(body:any){
    return this.refMegrendeles.update(body.key,body);
  }

  deleteMegrendeles(body:any)
  {
    return this.refMegrendeles.remove(body.key);
  }
}
