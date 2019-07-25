import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nomUtilisateur: string;
  motDePasse: string;
  photoUrl: string = "";
  isError: boolean;
  erreur: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isError = false;
  }

  participer() {
    this.authService.authentifier(this.nomUtilisateur, this.motDePasse, this.photoUrl)
    .subscribe(() => {
      this.router.navigate(['/vote']);
    }, (error: HttpErrorResponse) => {
      this.isError = true;
      if (error.status == 401) {
        this.erreur = "Nom d'utilisateur/mot de passe invalide(s)."
      } else if (error.status == 0) {
        this.erreur = "Erreur 500 - Veuillez recommencer ultérieurement."
      }
    });
  }

  recommencer() {
    this.ngOnInit();
  }

}
