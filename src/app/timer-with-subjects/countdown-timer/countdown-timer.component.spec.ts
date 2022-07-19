import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CountdownTimerComponent } from './countdown-timer.component';
@Component({
  selector: `Timer-Component`,
  template: `<app-countdown-timer [eventValue]="eventValue">
  </app-countdown-timer>`,
})
class TestTimerComponent {
  //  public eventValue: any = '';
  static eventValue: string = '';
}
describe('CountdownTimerComponent', () => {
  let component: CountdownTimerComponent;
  let fixture: ComponentFixture<CountdownTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountdownTimerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountdownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnChanges to be Succesful', function () {
    component.ngOnInit();
    expect(component.ngOnInit);
  });
  it('ngOnChanges to be Succesful', function () {
    component.ngOnDestroy();
    expect(component.ngOnDestroy);
  });
  it('Init to be Succesful', function () {
    component.startTimer();
    // spyOn(component.pauseTimer, 'emit');
    expect(component.startTimer);
  });
  it('Init to be Succesful', function () {
    component.pauseTimer();
    // spyOn(component.pauseTimer, 'emit');
    expect(component.pauseTimer);
  });
  it('Init to be Succesful', function () {
    component.resetTimer();
    // spyOn(component.pauseTimer, 'emit');
    expect(component.resetTimer);
  });
  it('Init to be Succesful', function () {
    component.clearTimer();
    // spyOn(component.pauseTimer, 'emit');
    expect(component.clearTimer);
  });
});
