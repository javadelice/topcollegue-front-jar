import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// remplacer HeaderComponent par votre composant
const ROUTES: Routes = [
  { path: 'login', component: HeaderComponent },
  { path: 'vote', component: HeaderComponent },
  { path: 'classement', component: HeaderComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
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
