import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit {
  @Input() eventValue: string | undefined;
  @Input() countValue: any;
  @Output() loggedEvents = new EventEmitter<any>();
  @Output() timeUp = new EventEmitter<any>();
  count: number = 0;
  percent: number = 100;
  backUpCount: number = 0;
  timer: any;
  startFlag: boolean = false;
  pauseFlag: boolean = false;
  resetFlag: boolean = false;
  events: any = [];
  outerStokeClr = '#DC143C';
  // greenClr='#DC143C'
  constructor() {
    // this.percent=0;
  }
  getN() {
    let a: any = '1';
    return a;
  }
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    if (this.events.length == 0) {
      this.count = parseInt(this.countValue);
     
      this.backUpCount = parseInt(this.countValue);
      this.outerStokeClr = '#78C000';
    }
    console.log(this.countValue);

    console.log(this.eventValue);
    if (this.eventValue == 'start') {
      this.startTimer();
    } else if (this.eventValue == 'pause') {
      this.pauseTimer();
    } else if (this.eventValue == 'reset') {
      this.resetTimer();
    }
  }
  startTimer() {
    const current = new Date();

    const timestamp = current.toTimeString();
    const date = current.toDateString();
    let time = timestamp.split('GMT');

    let event = {
      eventType: 'Started',
      count: this.count,
      time: time[0],
      date: date,
    };

    if (!this.startFlag) {
      if (this.count > 0) {
        this.timer = setInterval(() => {
          this.count--;
          this.percent = (this.count / this.backUpCount) * 100;
          if (this.percent <= 15) {
            this.outerStokeClr = '#d96459';
          }

          if (this.count == 0) {
            this.clearTimer();
            this.timeUp.emit('timeUp');

          } else {
          }
        }, 1000);
      }
    }
    if (this.count != 0) {
      this.events.push(event);
      this.loggedEvents.emit(this.events);
    }
    this.startFlag = true;
    this.pauseFlag = false;
    this.resetFlag = false;
  }
  pauseTimer() {
    const current = new Date();

    const timestamp = current.toTimeString();
    const date = current.toDateString();
    let time = timestamp.split('GMT');

    let event = {
      eventType: 'Paused',
      count: this.count,
      time: time[0],
      date: date,
    };
    if (this.count != 0) {
      this.events.push(event);
      this.loggedEvents.emit(this.events);
    }

    this.pauseFlag = true;
    this.startFlag = false;
    this.resetFlag = false;
    this.clearTimer();
  }
  clearTimer() {
    clearInterval(this.timer);
  }
  resetTimer() {
    this.resetFlag = true;
    this.pauseFlag = false;
    this.startFlag = false;
    this.clearTimer();
    this.events = [];
    this.loggedEvents.emit(this.events);
    this.count = this.backUpCount;
    // this.backUpCount = 0;
    this.timeUp.emit('');
    this.percent = 100;
    this.outerStokeClr = '#78C000';
  }
}
