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
  selector: 'app-timer-start-and-pause',
  templateUrl: './timer-start-and-pause.component.html',
  styleUrls: ['./timer-start-and-pause.component.scss'],
})
export class TimerStartAndPauseComponent implements OnInit {
  // event:any;

  eventsData: any = [];
  // timeUpValue: string='';
  timeUpFlag: boolean = false;

  startFlag: boolean = false;
  pauseFlag: boolean = true;
  resetFlag: boolean = false;
  startEmitValue: string = 'start';
  countInput: any = '';
  timerServiceSubscription$: any = {};
  timeUp: any;
  constructor(private timerService: TimerWithSubjectsService) {}

  ngOnInit(): void {
    this.timerService.setCountValueData(this.countInput);
    this.timerServiceSubscription$.timerData = this.timerService
      .getTimerData()
      .subscribe((resp: any) => {
        this.timeUp = resp;
        if (this.timeUp == 'timeUp') {
          this.timeUpFlag = true;
          this.startFlag = true;
          this.pauseFlag = true;
          // this.resetTimer();
        } else {
          this.timeUpFlag = false;
        }
      });
    this.timerServiceSubscription$.loggedEvents = this.timerService
      .getLoggedEventsData()
      .subscribe((resp: any) => {
        console.log(resp);
        this.eventsData = resp;
      });
  }

  startTimer() {
    if (this.timeUpFlag) {
      this.resetTimer();
      setTimeout(() => {
        this.startNewTimer();
      });
    } else {
      this.startNewTimer();
    }
  }
  startNewTimer() {
    this.timerService.setCountValueData(this.countInput);
    console.log(this.countInput);
    this.timerService.setNewEventData(this.startEmitValue);

    this.startFlag = true;
    this.pauseFlag = false;
    this.resetFlag = false;
  }
  pauseTimer() {
    this.timerService.setNewEventData('pause');

    this.pauseFlag = true;
    this.startFlag = false;
    this.resetFlag = false;
  }
  clearTimer() {}
  resetTimer() {
    this.timerService.setNewEventData('reset');
    this.resetFlag = true;
    this.pauseFlag = true;
    this.startFlag = false;
  }
  inputChanges() {
    if (this.countInput == null || this.countInput == undefined) {
      this.countInput = null;

      console.log('undefined d');
    }
    this.timerService.setCountValueData(this.countInput);
    // }
  }
  ngOnDestroy() {
    for (const key in this.timerServiceSubscription$) {
      const subscription = this.timerServiceSubscription$[key];
      subscription.unsubscribe();
    }
  }
}
