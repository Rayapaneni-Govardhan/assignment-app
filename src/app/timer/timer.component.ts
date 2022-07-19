import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from './service/timer.service';

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
  timerServiceSubscription$: Subscription;
  constructor(
    private timerService: TimerService,
    private cdref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.timerServiceSubscription$ = this.timerService
      .getTimerData()
      .subscribe((resp: any) => {
        this.timeUpValue = resp;
        console.log(resp);
      });
  }
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
  newEvent(evt: any) {
    console.log('triggered');

    this.eventValue = evt;
  }
  timeUp(evt: any) {
    // this.timeUpValue = evt;
  }
  loggedEvents(evt: any) {
    this.events = evt;
  }
  countValueEvent(evt: any) {
    this.countValue = evt;
  }
  ngOnDestroy() {
    this.timerServiceSubscription$.unsubscribe();
  }
}
