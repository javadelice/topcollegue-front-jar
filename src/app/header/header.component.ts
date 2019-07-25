import { Component, OnInit } from '@angular/core';
import { NgbDatepickerKeyMapService } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
currentUser:string="";

//constructor(private _srv:Dataservice, private authService: AuthService) {}

constructor() {}

deconnexion(){
  /*this.authService.logout().subscribe(() =>{}
  this.authService.resetCollegue();
  this.router.navigate(['/login']);
  },(err:HttpErrorResponse)=>{
  console.log("deconnexion impossible");
  })
*/
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


}
}

