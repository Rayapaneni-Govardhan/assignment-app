import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerWithSubjectsComponent } from './timer-with-subjects.component';

const routes: Routes = [{ path: '', component: TimerWithSubjectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerWithSubjectsRoutingModule { }
