import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TimerWithSubjectsService } from '../service/timer-with-subjects.service';

@Component({
  selector: 'app-timestamps',
  templateUrl: './timestamps.component.html',
  styleUrls: ['./timestamps.component.scss'],
})
export class TimestampsComponent implements OnInit {
  @Input() events: string | undefined;
  eventsData: any = [];
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
  ngOnDestroy() {
    for (const key in this.timerServiceSubscription$) {
      const subscription = this.timerServiceSubscription$[key];
      subscription.unsubscribe();
    }
  }
}
