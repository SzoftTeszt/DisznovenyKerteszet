import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdatokComponent } from './Part/adatok/adatok.component';
import { UjRendelesComponent } from './Part/uj-rendeles/uj-rendeles.component';

const routes: Routes = [
  {path:"adatok",component:AdatokComponent},
  {path:"ujrendeles",component:UjRendelesComponent},
  {path:"",component:AdatokComponent},
  {path:"**",component:AdatokComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
