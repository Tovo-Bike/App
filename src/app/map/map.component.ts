import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

@Component({
  selector: 'tovo-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  title: string = 'Angular4 AGM Demo';
  lat: number = 25.014010;
  lng: number = 121.538082;
  zoomValue: number = 15;

  isOpen: boolean = false;

  // google maps zoom level
  zoom: number = 15;

  markers: marker[] = [
  ]

  // slide toggle
  color = 'accent';
  checked = false;
  disabled = false;

  // input
  value = '';

  constructor() { }

  ngOnInit() {
  }

}


