import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TimerWithSubjectsService } from '../service/timer-with-subjects.service';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit {
  count: number = 0;
  percent: number = 100;
  backUpCount: number = 0;
  timer: any;
  startFlag: boolean = false;
  pauseFlag: boolean = false;
  resetFlag: boolean = false;
  timeUpFlag = false;
  events: any = [];
  eventValueInput: any;
  outerStokeClr = '#DC143C';
  timerServiceSubscription$: any = {};
  countValue: any;
  eventValue: any;
  // greenClr='#DC143C'
  constructor(private timerService: TimerWithSubjectsService) {
    // this.percent=0;
  }
  getN() {
    let a: any = '1';
    return a;
  }
  ngOnInit(): void {
    this.timerServiceSubscription$.newEvent = this.timerService
      .getNewEventData()
      .subscribe((resp: any) => {
        this.eventValue = resp;
        if (this.eventValue == 'start') {
          this.startTimer();
        } else if (this.eventValue == 'pause') {
          this.pauseTimer();
        } else if (this.eventValue == 'reset') {
          this.resetTimer();
        }
      });
    this.timerServiceSubscription$.countValue = this.timerService
      .getCountValueData()
      .subscribe((resp: any) => {
        console.log(resp);
        this.countValue = resp;
        if (this.events.length == 0) {
          this.count = parseInt(this.countValue);

          this.backUpCount = parseInt(this.countValue);
          this.outerStokeClr = '#78C000';
        }
      });
  }

  startTimer() {
    this.timeUpFlag = false;
    this.outerStokeClr = '#78C000';
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
      if (this.backUpCount > 0) {
        this.timer = setInterval(() => {
          this.count--;
          this.percent = (this.count / this.backUpCount) * 100;
          if (this.percent <= 15) {
            this.outerStokeClr = '#d96459';
          }

          if (this.count == 0) {
            this.clearTimer();
            // this.timeUp.emit('timeUp');
            this.timerService.setTimerData('timeUp');
            this.timeUpFlag = true;
          } else {
          }
        }, 1000);
      }
    }
    if (this.count != 0) {
      this.events.push(event);
      this.timerService.setLoggedEventsData(this.events);
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
      this.timerService.setLoggedEventsData(this.events);
    }

    this.pauseFlag = true;
    this.startFlag = false;
    this.resetFlag = false;
    this.outerStokeClr = '#FFA500';
    this.clearTimer();
  }
  clearTimer() {
    clearInterval(this.timer);
  }
  resetTimer() {
    this.resetFlag = true;
    this.pauseFlag = false;
    this.startFlag = false;
    this.timeUpFlag = false;
    this.clearTimer();
    this.events = [];

    this.timerService.setLoggedEventsData(this.events);
    this.count = this.backUpCount;
    // this.backUpCount = 0;
    // this.timeUp.emit('');
    this.timerService.setTimerData('');
    this.percent = 100;
    this.outerStokeClr = '#78C000';
  }
  ngOnDestroy() {
    for (const key in this.timerServiceSubscription$) {
      const subscription = this.timerServiceSubscription$[key];
      subscription.unsubscribe();
    }
  }
}
