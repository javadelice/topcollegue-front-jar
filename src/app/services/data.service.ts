import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
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
  private voteSelectionne = new Subject<Vote>();


  constructor(private httpClient: HttpClient) {}



publierUser(user: User) {
  return this.userSelectionne.next(user);
}


publierVote(user: Vote) {
  return this.voteSelectionne.next(user);
}

recupUser(): Observable<User> {
  return this.userSelectionne.asObservable();
}

recupUserList(): Observable<User[]> {
  return this.httpClient.get<User[]>(environment.backendUrl + 'topcollegues/collegues', {withCredentials: true})
  .pipe(
    map(tableauUserRecup =>
      tableauUserRecup.map(oneUser => {
        return oneUser;
      }, (error: any) => {
        console.log(error);
      })
    )
  );
}

recupVoteList(): Observable<Vote[]> {
  return this.httpClient.get<Vote[]>(environment.backendUrl + 'topcollegues/votes', {withCredentials: true})
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


posterVote(matriVotant: string, operation: string,  matriElu: string): Observable<Vote>{
  return this.httpClient.post<Vote>(environment.backendUrl + 'topcollegues/vote', {
    "votant": matriVotant,
    "typeVote": operation,
    "elu":matriElu
  }, {withCredentials: true});

}

}



