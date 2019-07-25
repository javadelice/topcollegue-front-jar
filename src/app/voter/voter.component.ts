import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../models/User';
import { UsersMock } from '../mock/UsersMock';


@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  userList: User[] = new UsersMock().getList();


  constructor(private srv: DataService) { }

  ngOnInit() {
  this.srv.recupUserList()
  .subscribe(userListRecup => {
    this.userList = userListRecup;
  }, (error:any) =>{
    //cas erreur
  });
  }

}

