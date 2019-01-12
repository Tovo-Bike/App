import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'tovo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'TOVO';
  links = [
    {text: 'Profile', path: 'profile'},
    {text: 'Map', path: ''},
    {text: 'Store', path: 'store'},
    {text: 'Account', path: 'account'},
    {text: 'Rank', path: 'rank'},
    {text: 'History', path: 'history'},
    {text: 'Setting', path: 'setting'}
  ];
  constructor() {}

  onToggle(text) {
    if (text) {
      this.title = text;
      if (text === 'Map') {this.title = 'TOVO'; }
    }
    this.sidenav.toggle();
  }
}
