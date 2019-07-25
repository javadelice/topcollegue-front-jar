import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/User';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
 /**
   * if we have token the user is loggedIn
   * 
   */
  private hasToken() : boolean {
    return !!localStorage.getItem('token');
  }
  constructor(private httpClient: HttpClient) { }

  authentifier(nomUtilisateur: string, motDePasse: string, photoUrl: string) {
    localStorage.setItem('token', 'JWT');
    return this.httpClient.post(URL_BACKEND + 'topcollegues/auth', {
      "nomUtilisateur": nomUtilisateur,
      "motDePasse": motDePasse,
      "photoUrl": photoUrl
    }, {withCredentials: true});
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
    return this.httpClient.post(URL_BACKEND + 'logout', {}, {withCredentials:true});
  }

  isLoggedIn(): Observable<User> {
    return this.httpClient.get<User>(URL_BACKEND + 'topcollegues/me', {withCredentials:true});
  }

}
