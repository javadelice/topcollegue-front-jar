import { Component, OnInit } from '@angular/core';
import { NgbDatepickerKeyMapService } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { UsersMock } from '../mock/UsersMock';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn : Observable<User>;


constructor(private authService:AuthService) {
  this.isLoggedIn = this.authService.isLoggedIn();
}

deconnexion() {
  this.authService.logout();
}

voteActive(){

}

classementActive(){

}

ngOnInit() {
  /*
  this.authService.abonnementCollegue()
  .subscribe(userGet=>{
    this.currentUser = userGet;
  })
*/
this.isLoggedIn = this.authService.isLoggedIn();

}
}

