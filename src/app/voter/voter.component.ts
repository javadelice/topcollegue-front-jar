import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../models/User';
import { UsersMock } from '../mock/UsersMock';
import { VotesMock } from '../mock/VotesMock';
import { Vote } from '../models/Vote';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  userList: User[] = new UsersMock().getList();
  votes: Vote[]= new VotesMock().getList();;
  erreur:any;
  currentUser:User;

  constructor(private srv: DataService, private authService: AuthService) { }

votePlus(plusButton: HTMLButtonElement, minusButton: HTMLButtonElement, elu: User){
  minusButton.setAttribute("disabled", "true");
  this.authService.isLoggedIn()
  .subscribe((userRecup) => {
    this.currentUser = userRecup;
    this.srv.posterVote(this.currentUser.matricule,"POSITIF", elu.matricule).subscribe(() => {});
  }, (error:any) =>{
    this.erreur=error;});
}

voteMoins(plusButton: HTMLButtonElement, minusButton: HTMLButtonElement){
  //document.getElementById("plusButton").setAttribute("disabled", "true");
  plusButton.setAttribute("disabled", "true");
}



  ngOnInit() {

  this.srv.recupUserList()
  .subscribe(userListRecup => {
    this.userList = userListRecup;
    this.erreur = '';
  }, (error:any) =>{
    this.erreur=error;
  });
  }

}

