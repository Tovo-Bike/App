import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { Router } from '@angular/router';
import { AuthenService } from '@app/services/authen.service';

@Component({
  selector: 'tovo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'TOVO';
  currentUser;
  links = [
    {text: 'Profile', path: 'profile'},
    {text: 'Map', path: 'map'},
    {text: 'Store', path: 'store'},
    {text: 'Account', path: 'account'},
    {text: 'Rank', path: 'rank'},
    {text: 'History', path: 'history'},
    {text: 'Setting', path: 'setting'}
  ];
  constructor(
    private router: Router,
    private authenService: AuthenService) {
      this.authenService.currentUser.subscribe(x => this.currentUser = x);
  }

  onToggle(text) {
    if (text) {
      this.title = text.toUpperCase();
    }
    this.sidenav.toggle();
  }

  outletActivate() {
    if (this.router.url.substring(1)) {this.title = this.router.url.substring(1).toUpperCase(); }
  }
}
