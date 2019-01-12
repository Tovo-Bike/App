import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tovo-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  constructor() { }

  ngOnInit() {
  }

}
