import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpXsrfTokenExtractor } from '@angular/common/http';
import { User } from '../models/User';
import { Vote } from '../models/Vote';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userSelectionne = new Subject<User>();

publierUser(user: User) {
  return this.userSelectionne.next(user);
}

recupUser(): Observable<User> {
  return this.userSelectionne.asObservable();
}

recupUserList(): Observable<User[]> {
  return this.httpClient.get<User[]>(environment.backendUrl+"PATH_TO_GET_ALL_USER", {withCredentials: true})
  .pipe(
    map(tableauUserRecup =>
      tableauUserRecup.map(oneUser => {
        return oneUser;
      }, (error: any) => {
        // cas erreur
      })
    )
  );
}

recupVoteList(): Observable<Vote[]> {
  return this.httpClient.get<Vote[]>(environment.backendUrl+"PATH_TO_GET_ALL_VOTE", {withCredentials: true})
  .pipe(
    map(tableauUserRecup =>
      tableauUserRecup.map(oneUser => {
        return oneUser;
      }, (error: any) => {
        // cas erreur
      })
    )
  );
}
  constructor(private httpClient: HttpClient) {}

  // constructor(private _authService:AuthentificationService) { }
}
