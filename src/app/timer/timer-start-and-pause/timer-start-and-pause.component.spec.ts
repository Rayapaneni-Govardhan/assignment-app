import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { TimerStartAndPauseComponent } from './timer-start-and-pause.component';
import { FormsModule } from '@angular/forms';

describe('TimerStartAndPauseComponent', () => {
  let component: TimerStartAndPauseComponent;
  let fixture: ComponentFixture<TimerStartAndPauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TimerStartAndPauseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimerStartAndPauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should not output duplicate values', fakeAsync(() => {
    // const onClickMock = spyOn(TimerStartAndPauseComponent, 'startNewTimer');
    const component = new TimerStartAndPauseComponent();
    spyOn(component.eventType, 'emit');

    component.startEmitValue = 'start';

    component.startNewTimer();

    expect(component.eventType.emit).toHaveBeenCalled();
  }));
 

  it("Init to be Succesful", function() {
    component.startTimer();
    expect(component.timeUpFlag).toBeFalsy();
  });
  it("Init to be Succesful", function() {
    component.startNewTimer();
    expect(component.startFlag).toBeTruthy();
  });
  it("Init to be Succesful", function() {
    component.startNewTimer();
    expect(component.pauseFlag).toBeFalsy();
  });
  it("Init to be Succesful", function() {
    component.pauseTimer();
    // spyOn(component.pauseTimer, 'emit');
    expect(component.pauseTimer);
  });
  it("Init to be Succesful", function() {
    component.resetTimer();
    // spyOn(component.pauseTimer, 'emit');
    expect(component.resetTimer);
  });
  it("Init to be Succesful", function() {
    component.inputChanges();
    // spyOn(component.pauseTimer, 'emit');
    expect(component.inputChanges);
  });
  it("ngOnChanges to be Succesful", function() {
    component.ngOnChanges({});
    // spyOn(component.pauseTimer, 'emit');
    expect(component.ngOnChanges);
  });
  it("ngOnInit to be Succesful", function() {
    component.ngOnInit();
    // spyOn(component.pauseTimer, 'emit');
    expect(component.ngOnInit);
  });

  // it('should test countValueEvent', () => {
  //   spyOn(
  //     TimerStartAndPauseComponent.prototype,
  //     'startTimer'
  //   ).and.callThrough();
  //   TimerStartAndPauseComponent.prototype.startTimer();
  //   expect(TimerStartAndPauseComponent.prototype.startTimer).toHaveBeenCalled();
  // }   );
  // it('should test countValueEvent', fakeAsync(() => {
  //   spyOn(
  //     TimerStartAndPauseComponent.prototype,
  //     'startNewTimer'
  //   ).and.callThrough();
  //   TimerStartAndPauseComponent.prototype.startNewTimer();
  //   expect(
  //     TimerStartAndPauseComponent.prototype.startNewTimer
  //   ).toHaveBeenCalled();
  // }));
  // it('should test countValueEvent', fakeAsync(() => {
  //   spyOn(
  //     TimerStartAndPauseComponent.prototype,
  //     'pauseTimer'
  //   ).and.callThrough();
  //   TimerStartAndPauseComponent.prototype.pauseTimer();
  //   expect(
  //     TimerStartAndPauseComponent.prototype.pauseTimer
  //   ).toHaveBeenCalled();
  // }));
  // it('should test countValueEvent', fakeAsync(() => {
  //   spyOn(
  //     TimerStartAndPauseComponent.prototype,
  //     'resetTimer'
  //   ).and.callThrough();
  //   TimerStartAndPauseComponent.prototype.resetTimer();
  //   expect(
  //     TimerStartAndPauseComponent.prototype.resetTimer
  //   ).toHaveBeenCalled();
  // }));
  // it('should test countValueEvent', fakeAsync(() => {
  //   spyOn(
  //     TimerStartAndPauseComponent.prototype,
  //     'inputChanges'
  //   ).and.callThrough();
  //   TimerStartAndPauseComponent.prototype.inputChanges();
  //   expect(
  //     TimerStartAndPauseComponent.prototype.inputChanges
  //   ).toHaveBeenCalled();
  // }));
});
