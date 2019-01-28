import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tovo-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  stars = [ true, true, true, true, true ];
  score = 5;
  constructor() { }

  ngOnInit() {
  }

  rate(index) {
    this.score = index + 1;
    for ( let i = 0; i < 5; ++i) {
      if (i <= index) {
        this.stars[i] = true;
      } else {
        this.stars[i] = false;
      }
    }
  }

}
