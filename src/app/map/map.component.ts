import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { first } from 'rxjs/operators';

import { TripService } from '@app/services/trip.service';
import { AuthenService } from '@app/services/authen.service';

import { MatSnackBar} from '@angular/material';

@Component({
  selector: 'tovo-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  selectStart = undefined;
  center_lat = 25.018100;
  center_lng = 121.539082;
  zoomValue = 20;

  isOpen = false;
  // google maps zoom level
  zoom = 16;

  // taker's location for marking their information
  markers = [];
  demands = [];

  // slide toggle
  checked = false;
  go = 0;
  tid = 0;

  // input
  value = '';

  constructor(
    private tripService: TripService,
    private authService: AuthenService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  mapClicked($event: MouseEvent) {
    if (this.markers.length === 0) {
      this.markers.push({
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        draggable: true,
        labelOptions: { text: 'S', color: 'white' },
        content: 'Start'
      });
    } else if (this.markers.length === 1) {
      this.markers.push({
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        draggable: true,
        labelOptions: { text: 'E', color: 'white' },
        content: 'End'
      });
    }
  }

  showDetail(m) {
    this.selectStart = m;
  }

  markerDragEnd(m,  $event: MouseEvent) {
    m.lat = $event.coords.lat,
    m.lng = $event.coords.lng;
  }

  onSubmit() {
    const uid = this.authService.currentUserValue.uid;
    this.tripService.tripGo(uid, this.markers[0].lng, this.markers[0].lat, this.markers[1].lng, this.markers[1].lat)
        .pipe(first())
        .subscribe(
            data => {
              this.messege('Assign Success!');
              this.markers = [];
            },
            error => {
              this.messege('Assign Fail!');
            });
  }
  onRider() {
    this.demands = [];
    this.selectStart = undefined;
    this.tripService.getTrip().subscribe(data => {
      console.log('get new trip');
      data.map( x => {
        this.demands.push({
          start:
          {
            lat: x.slat,
            lng: x.slon,
            draggable: false,
            labelOptions: { text: 'S', color: 'black' },
            content: x.tid.toString() + ':Start',
            score: x.score,
            tid: x.tid
          },
          end:
          {
            lat: x.elat,
            lng: x.elon,
            draggable: false,
            labelOptions: { text: 'E', color: 'white' },
            content: x.tid.toString() + ':End',
            score: x.score,
            tid: x.tid
          }}
        );
      });
    });
  }

  onServe(m) {
    const uid = this.authService.currentUserValue.uid;
    this.tid = m.tid;
    this.tripService.acceptTrip(uid, this.tid)
    .subscribe(
      data => {
        this.messege('Get Success!');
        this.onRider();
        this.go = 1;
      },
      error => {
        this.messege('Get Fail!');
      });
  }

  onDeparture() {
    this.tripService.startTrip(this.tid)
    .subscribe(
      data => {
        this.messege('Departure Success!');
        this.onRider();
        this.go = 2;
      },
      error => {
        this.messege('Departure Fail!');
      });
  }

  onArrive() {
    this.tripService.endTrip(this.tid)
    .subscribe(
      data => {
        this.messege('Arrive Success!');
        this.onRider();
        this.go = 0;
        console.log('arrive', data);
      },
      error => {
        this.messege('Arrive Fail!');
      });
  }


  messege(msg) {
    this.snackBar.open(msg, 'alert', {
      duration: 5000,
    });
  }
}
