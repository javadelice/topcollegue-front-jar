import { Component, OnInit } from '@angular/core';
import { hasClassName } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']

})
export class ClassementComponent implements OnInit {

  elus = [{"score":1,"nom":"Cassan", "prenom": "Robin", "photo":"http://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
  {"score":2,"nom":"Ayinde", "prenom": "Alexei", "photo":"http://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
  {"score":3,"nom":"Mathieu", "prenom": "Jean-Baptiste", "photo":"http://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}];


  constructor() { }

  ngOnInit() {
  }


}
