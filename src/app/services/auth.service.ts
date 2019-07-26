import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/User';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private subLogin = new Subject<boolean>();
  publierLogin(isLoggedIn:boolean) {
    this.subLogin.next(isLoggedIn);
  }
  abonnementLoggin(): Observable<boolean> {
    return this.subLogin.asObservable();
  }

  constructor(private httpClient: HttpClient) { }

  authentifier(nomUtilisateur: string, motDePasse: string, photoUrl: string) {
    return this.httpClient.post(URL_BACKEND + 'topcollegues/auth', {
      "nomUtilisateur": nomUtilisateur,
      "motDePasse": motDePasse,
      "photoUrl": photoUrl
    }, {withCredentials: true});
  }

  logout() {
    return this.httpClient.post(URL_BACKEND + 'logout', {}, {withCredentials:true});
  }

  isLoggedIn(): Observable<User> {
    return this.httpClient.get<User>(URL_BACKEND + 'topcollegues/me', {withCredentials:true});
  }

}
