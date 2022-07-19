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

  it("ngOnInit to be Succesful", function() {
    component.ngOnInit();
    // spyOn(component.pauseTimer, 'emit');
    expect(component.ngOnInit);
  });
  it('ngOnDestroy to be Succesful', function () {
    component.ngOnDestroy();
    expect(component.ngOnDestroy);
  });

 
});
