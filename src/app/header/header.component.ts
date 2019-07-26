import { Component, OnInit } from '@angular/core';
import { NgbDatepickerKeyMapService } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service';
import { AuthService } from '../services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { User } from '../models/User';
import { UsersMock } from '../mock/UsersMock';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  actionSub: Subscription;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((collegue) => {
      this.isLoggedIn = true;
    }, (error:HttpErrorResponse) => {
      this.isLoggedIn = false;
    });

    this.actionSub = this.authService.abonnmenentLoggin().subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    }, (error:HttpErrorResponse) => {
      this.isLoggedIn = false;
      console.log(error);
    })

  }

  deconnexion() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
      this.isLoggedIn = false;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  ngOnDestroy(): void {
    this.actionSub.unsubscribe();
  }
}

