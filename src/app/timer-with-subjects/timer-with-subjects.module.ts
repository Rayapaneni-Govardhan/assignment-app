import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerWithSubjectsRoutingModule } from './timer-with-subjects-routing.module';
import { TimerWithSubjectsComponent } from './timer-with-subjects.component';
import { StartAndPauseCountComponent } from './start-and-pause-count/start-and-pause-count.component';
import { TimerStartAndPauseComponent } from './timer-start-and-pause/timer-start-and-pause.component';
import { TimestampsComponent } from './timestamps/timestamps.component';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

@NgModule({
  declarations: [
    TimerWithSubjectsComponent,
    TimerStartAndPauseComponent,
    TimestampsComponent,
    StartAndPauseCountComponent,
    CountdownTimerComponent,
  ],
  imports: [
    CommonModule,
    TimerWithSubjectsRoutingModule,
    CommonModule,
    NgCircleProgressModule,

    FormsModule,
  ],
})
export class TimerWithSubjectsModule {}
