import { Component, OnInit } from '@angular/core';
import { hasClassName } from '@ng-bootstrap/ng-bootstrap/util/util';
import { DataService } from '../services/data.service';
import { EluScoreDTO } from '../models/elu-score-dto';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']

})
export class ClassementComponent implements OnInit {

  elus: EluScoreDTO[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.recupScore().subscribe((elus:EluScoreDTO[]) => {
      this.elus = elus;
    }, (error:HttpErrorResponse) => {
      console.log(error);
    })
  }


}
