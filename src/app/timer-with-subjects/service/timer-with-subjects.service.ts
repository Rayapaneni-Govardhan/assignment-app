import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerWithSubjectsService {
  private timeUpSource$ = new BehaviorSubject<any>('');
  public timeUp$: Observable<any> = this.timeUpSource$.asObservable();

  private newEventSource$ = new BehaviorSubject<any>('');
  public newEvent$: Observable<any> = this.newEventSource$.asObservable();

  private countValueSource$ = new BehaviorSubject<any>('');
  public countValue$: Observable<any> = this.countValueSource$.asObservable();

  private loggedEventsSource$ = new BehaviorSubject<any>([]);
  public loggedEvents$: Observable<any> =
    this.loggedEventsSource$.asObservable();

  constructor() {}
  setTimerData(data: any) {
    this.timeUpSource$.next(data);
  }
  getTimerData() {
    return this.timeUp$;
  }
  setNewEventData(data: any) {
    this.newEventSource$.next(data);
  }
  getNewEventData() {
    return this.newEvent$;
  }
  setLoggedEventsData(data: any) {
    this.loggedEventsSource$.next(data);
  }
  getLoggedEventsData() {
    return this.loggedEvents$;
  }
  setCountValueData(data: any) {
    this.countValueSource$.next(data);
  }
  getCountValueData() {
    return this.countValue$;
  }
}
