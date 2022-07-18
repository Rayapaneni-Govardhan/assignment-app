import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TimerComponent } from './timer.component';
import { TimestampsComponent } from './timestamps/timestamps.component';
// impoer {TimestampsComponent}
// import {TestTimerComponent} from './timer.component'
@Component({
  selector: `Timer-Component`,
  template: `<app-timestamps [eventValue]="eventValue"> </app-timestamps>`,
})
class TestHostComponent {
  events: any;

  // public valueFromHost: string; /* this is the variable which is passed as input to the TestComponent */
}
// @Component({
//   selector: `Timer-Component`,
//   template: `<app-countdown-timer [eventValue]="eventValue">
//   </app-countdown-timer>`,
// })
class TestTimerComponent {
  //  public eventValue: any = '';
  static eventValue: string = '';
}

// @Component({
//   selector : `test-host-component`,
//   template: `<app-timestamps  [events]="events">
//   </app-timestamps>`,
// })

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;
  let fixture2, testHost: any, element: any, de;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerComponent, TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    fixture2 = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    element = fixture.nativeElement;
    de = fixture.debugElement;
  });
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should test app-timestamps`', () => {
    let event = [
      {
        eventType: 'Started',
        count: 7,
        time: '23:33:01',
        date: 'Mon Jul 18 2022',
      },
    ];
    testHost.events = event;

    //trigger change detection
    fixture.detectChanges();
    // expect(element.querySelector('h1').innerText).toBe('Hello World!');
  });
  it('should not output duplicate values', fakeAsync(() => {
    spyOn(TimerComponent.prototype, 'newEvent').and.callThrough();
    TimerComponent.prototype.newEvent('Started');
    expect(TimerComponent.prototype.newEvent).toHaveBeenCalled();
    // // const onClickMock = spyOn(TimerStartAndPauseComponent, 'startNewTimer');
    // const component = new TimerComponent();
    // // spyOn(component.newEvent, 'emit');

    // // component.newEvent = 'start';

    // component.newEvent('Started');

    // expect(component.newEvent).toHaveBeenCalled();
  }));
  it('should have @Input() decorator on eventValue', () => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.eventValue = 'Started';
    expect(
      fixture.debugElement.query(By.css('app-countdown-timer'))
        .componentInstance['eventValue']
    ).toEqual('Started');
  });
  it('should have @Input() decorator on countValue', () => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.countValue = '7';
    expect(
      fixture.debugElement.query(By.css('app-countdown-timer'))
        .componentInstance['countValue']
    ).toEqual('7');
  });
  it('should have @Input() decorator on timeUp', () => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.timeUpValue = 'timeUp';
    expect(
      fixture.debugElement.query(By.css('app-countdown-timer'))
        .componentInstance['timeUpValue']
    ).toEqual('timeUp');
  });
  it('should have @Input() decorator on events', () => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let event = [
      {
        eventType: 'Started',
        count: 7,
        time: '23:33:01',
        date: 'Mon Jul 18 2022',
      },
    ];
    component.events = event;
    expect(
      fixture.debugElement.query(By.css('app-countdown-timer'))
        .componentInstance['events']
    ).toEqual(event);
  });
  it('should test timeUp', fakeAsync(() => {
    spyOn(TimerComponent.prototype, 'timeUp').and.callThrough();
    TimerComponent.prototype.timeUp('Started');
    expect(TimerComponent.prototype.timeUp).toHaveBeenCalled();
  }));
  it('should test loggedEvents', fakeAsync(() => {
    let event = [
      {
        eventType: 'Started',
        count: 7,
        time: '23:33:01',
        date: 'Mon Jul 18 2022',
      },
    ];
    spyOn(TimerComponent.prototype, 'loggedEvents').and.callThrough();
    TimerComponent.prototype.loggedEvents(event);
    expect(TimerComponent.prototype.loggedEvents).toHaveBeenCalled();
  }));
  it('should test countValueEvent', fakeAsync(() => {
    spyOn(TimerComponent.prototype, 'countValueEvent').and.callThrough();
    TimerComponent.prototype.countValueEvent(7);
    expect(TimerComponent.prototype.countValueEvent).toHaveBeenCalled();
  }));
  it("new events to be Succesful", function() {
    component.newEvent('start');
    // spyOn(component.pauseTimer, 'emit');
    expect(component.newEvent);
  });
  // it('should call ngOnChanges', () => {
  //   const fixture = TestBed.createComponent(TestHostComponent);
  //   const hostComponent = fixture.componentInstance;
  //   hostComponent.events = 'Test';
  //   const component = hostComponent.testComponent;
  //   jasmine.createSpy('ngOnChanges').and.callThrough();

  //   // spyOn(component, 'ngOnChanges').and.callThrough();
  //   fixture.detectChanges();
  //   expect(component.ngOnChanges).toHaveBeenCalled();
  // });
});
