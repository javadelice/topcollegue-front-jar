import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpXsrfTokenExtractor } from '@angular/common/http';
import { User } from '../models/User';
import { Vote } from '../models/Vote';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { EluScoreDTO } from '../models/elu-score-dto';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userSelectionne = new Subject<User>();

  constructor(private httpClient: HttpClient) { }

  publierUser(user: User) {
    return this.userSelectionne.next(user);
  }

  recupUser(): Observable<User> {
    return this.userSelectionne.asObservable();
  }

  recupUserList(): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.backendUrl + 'PATH_TO_GET_ALL_USER', { withCredentials: true })
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
    return this.httpClient.get<Vote[]>(environment.backendUrl + 'PATH_TO_GET_ALL_VOTE', { withCredentials: true })
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

  recupScore(): Observable<EluScoreDTO[]> {
    return this.httpClient.get<EluScoreDTO[]>(environment.backendUrl + 'topcollegues/score', {withCredentials:true});
  }

}
