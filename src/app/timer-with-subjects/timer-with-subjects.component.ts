import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerWithSubjectsService } from './service/timer-with-subjects.service';

@Component({
  selector: 'app-timer-with-subjects',
  templateUrl: './timer-with-subjects.component.html',
  styleUrls: ['./timer-with-subjects.component.scss'],
})
export class TimerWithSubjectsComponent implements OnInit {
  eventValue: any;
  events: any = [];
  countValue: any;
  timeUpValue: any;
  timerServiceSubscription$: any = {};
  constructor(
    private timerService: TimerWithSubjectsService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.timerServiceSubscription$.timerData = this.timerService
      .getTimerData()
      .subscribe((resp: any) => {
        this.timeUpValue = resp;
      });

    this.timerServiceSubscription$.newEvent = this.timerService
      .getNewEventData()
      .subscribe((resp: any) => {
        this.eventValue = resp;
      });
    this.timerServiceSubscription$.loggedEvents = this.timerService
      .getLoggedEventsData()
      .subscribe((resp: any) => {
        console.log(resp);
        this.events = resp;
      });
    this.timerServiceSubscription$.countValue = this.timerService
      .getCountValueData()
      .subscribe((resp: any) => {
        console.log(resp);
        this.countValue = resp;
      });
  }
  ngAfterContentChecked() {
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    for (const key in this.timerServiceSubscription$) {
      const subscription = this.timerServiceSubscription$[key];
      subscription.unsubscribe();
    }
  }
}
