import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { TimerStartAndPauseComponent } from './timer-start-and-pause/timer-start-and-pause.component';
import { TimestampsComponent } from './timestamps/timestamps.component';
import { StartAndPauseCountComponent } from './start-and-pause-count/start-and-pause-count.component';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    TimerComponent,
    CountdownTimerComponent,
    TimerStartAndPauseComponent,
    TimestampsComponent,
    StartAndPauseCountComponent,
  ],
  imports: [
    CommonModule,
    NgCircleProgressModule,
    TimerRoutingModule,
    FormsModule,
  ],
})
export class TimerModule {}
