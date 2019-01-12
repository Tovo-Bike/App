import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material';

export interface Time {
  value: string;
  viewValue: string;
}
export interface Start_ends {
  start: string;
  end: string;
}

@Component({
  selector: 'tovo-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  panelOpenState = false;
  step = 0;
  
  times: Time[] = [
    {value: 'time/1', viewValue: '1'},
    {value: 'time-2', viewValue: '2'},
    {value: 'time-3', viewValue: '3'},
    {value: 'time-4', viewValue: '4'},
    {value: 'time-5', viewValue: '5'},
    {value: 'time-6', viewValue: '6'},
    {value: 'time-7', viewValue: '7'},
    {value: 'time-8', viewValue: '8'},
    {value: 'time-9', viewValue: '9'},
    {value: 'time-10', viewValue: '10'},
    {value: 'time-11', viewValue: '11'},
    {value: 'time-12', viewValue: '12'},
    {value: 'time-13', viewValue: '13'},
    {value: 'time-14', viewValue: '14'},
    {value: 'time-15', viewValue: '15'},
    {value: 'time-16', viewValue: '16'},
    {value: 'time-17', viewValue: '17'},
    {value: 'time-18', viewValue: '18'},
    {value: 'time-19', viewValue: '19'},
    {value: 'time-20', viewValue: '20'},
    {value: 'time-21', viewValue: '21'},
    {value: 'time-22', viewValue: '22'},
    {value: 'time-23', viewValue: '23'},
    {value: 'time-24', viewValue: '24'}
  ];


  removable = true;

  selectedStart: string;
  selectedEnd: string;

  start_end: Start_ends[] = [

  ];

  add(): void {
    this.step = 0;

    // Add start and end time
    this.start_end.push({start: this.selectedStart, end: this.selectedEnd});

    // initial selectedStart and selectedEnd
    this.selectedStart='';
    this.selectedEnd='';
  }

  // remove(time: Start_ends): void {
  //   const index = this.start_end.indexOf(time);

  //   if (index >= 0) {
  //     this.start_end.splice(index, 1);
  //   }
  // }

  // visible = true;
  // selectable = true;
  // addOnBlur = true;
  // readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  // fruits: Fruit[] = [
  // ];

  // add2(event: MatChipInputEvent): void {
  //   const input = event.input;
  //   const value = event.value;

  //   // Add our fruit
  //   if ((value || '').trim()) {
  //     this.fruits.push({name: value.trim()});
  //   }

  //   // Reset the input value
  //   if (input) {
  //     input.value = '';
  //   }
  // }

  // remove(fruit: Fruit): void {
  //   const index = this.fruits.indexOf(fruit);

  //   if (index >= 0) {
  //     this.fruits.splice(index, 1);
  //   }
  // }

  constructor() { }

  ngOnInit() {
  }
  
}
