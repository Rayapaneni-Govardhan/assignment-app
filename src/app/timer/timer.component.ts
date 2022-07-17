import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  eventValue: any;
  events: any = [];
  countValue: any;
  timeUpValue: any;
  constructor() {}

  ngOnInit(): void {}

  newEvent(evt: any) {
    console.log('triggered');

    this.eventValue = evt;
  }
  timeUp(evt: any) {
    this.timeUpValue = evt;
  }
  loggedEvents(evt: any) {
    this.events = evt;
  }
  countValueEvent(evt: any) {
    this.countValue = evt;
  }
}
