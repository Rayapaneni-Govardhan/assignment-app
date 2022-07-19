import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TimerWithSubjectsService } from '../service/timer-with-subjects.service';

@Component({
  selector: 'app-start-and-pause-count',
  templateUrl: './start-and-pause-count.component.html',
  styleUrls: ['./start-and-pause-count.component.scss'],
})
export class StartAndPauseCountComponent implements OnInit {
  @Input() events: string | undefined;
  eventsData: any = [];
  startedCount: number = 0;
  pausedCount: number = 0;
  timerServiceSubscription$: any = {};
  constructor(private timerService: TimerWithSubjectsService) {}

  ngOnInit(): void {
    this.timerServiceSubscription$.loggedEvents = this.timerService
      .getLoggedEventsData()
      .subscribe((resp: any) => {
        console.log(resp);
        this.eventsData = resp;
      });
  }

  getCount(eventsData: any) {
    this.startedCount = 0;
    this.pausedCount = 0;
    this.eventsData.forEach((element: any) => {
      if (element.eventType == 'Started') {
        this.startedCount++;
      } else if (element.eventType == 'Paused') {
        this.pausedCount++;
      }
    });
    if (this.eventsData.length == 0) {
      this.startedCount = 0;
      this.pausedCount = 0;
    }
    return '';
  }
  ngOnDestroy() {
    for (const key in this.timerServiceSubscription$) {
      const subscription = this.timerServiceSubscription$[key];
      subscription.unsubscribe();
    }
  }
}
