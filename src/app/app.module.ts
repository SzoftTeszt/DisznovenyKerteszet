import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Part/nav/nav.component';
import { AdatokComponent } from './Part/adatok/adatok.component';
import { UjRendelesComponent } from './Part/uj-rendeles/uj-rendeles.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Enviroments } from './enviroments';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdatokComponent,
    UjRendelesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(Enviroments.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
