import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VoterComponent } from './voter/voter.component';

// remplacer HeaderComponent par votre composant
const ROUTES: Routes = [
  { path: 'login', component: HeaderComponent },
  { path: 'vote', component: VoterComponent },
  { path: 'classement', component: HeaderComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VoterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    NgbModule,
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
