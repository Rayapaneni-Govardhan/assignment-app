import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private timeUpSource$ = new BehaviorSubject<any>('');

  public timeUp$: Observable<any> = this.timeUpSource$.asObservable();
  constructor() {}
  setTimerData(data: any) {
    this.timeUpSource$.next(data);
  }

  getTimerData() {
    return this.timeUp$;
  }
}
