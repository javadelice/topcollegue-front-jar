import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ClassementComponent } from './classement/classement.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { VoterComponent } from './voter/voter.component';

const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'vote', component: VoterComponent },
  { path: 'classement', component: ClassementComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login'}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    VoterComponent,
    ClassementComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
