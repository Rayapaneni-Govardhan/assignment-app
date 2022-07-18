import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-timer-start-and-pause',
  templateUrl: './timer-start-and-pause.component.html',
  styleUrls: ['./timer-start-and-pause.component.scss'],
})
export class TimerStartAndPauseComponent implements OnInit {
  // event:any;
  @Input() events: string | undefined;
  @Input() timeUp: string | undefined;
  eventsData: any = [];
  // timeUpValue: string='';
  timeUpFlag: boolean = false;

  startFlag: boolean = false;
  pauseFlag: boolean = true;
  resetFlag: boolean = false;
  startEmitValue:string='start'
  countInput: any = '';
  constructor() {}

  @Output() eventType = new EventEmitter<any>();
  @Output() countInputValue = new EventEmitter<any>();

  ngOnInit(): void {
    this.countInputValue.emit(this.countInput);
  }
  ngOnChanges(changes: SimpleChanges) {
    this.eventsData = this.events;
    // this.timeUpValue = this.timeUp;
    if (this.timeUp == 'timeUp') {
      this.timeUpFlag = true;
      this.startFlag = true;
      this.pauseFlag = true;
      // this.resetTimer();
    } else {
      this.timeUpFlag = false;
    }
  }
  // ngOnChanges() {
  //   console.log(this.eventValue);
  // }
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
    this.countInputValue.emit(this.countInput);
    console.log(this.countInput);
   
    this.eventType.emit(this.startEmitValue);

    this.startFlag = true;
    this.pauseFlag = false;
    this.resetFlag = false;
  }
  pauseTimer() {
    this.eventType.emit('pause');
    this.pauseFlag = true;
    this.startFlag = false;
    this.resetFlag = false;
  }
  clearTimer() {}
  resetTimer() {
    this.eventType.emit('reset');
    this.resetFlag = true;
    this.pauseFlag = true;
    this.startFlag = false;
  }
  inputChanges() {
    if (this.countInput == null || this.countInput == undefined) {
      this.countInput = null;

      console.log('undefined d');
    } 
    // else {
      // console.log(this.countInput);

      this.countInputValue.emit(this.countInput);
    // }
  }
}
