import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerStartAndPauseComponent } from './timer-start-and-pause.component';

describe('TimerStartAndPauseComponent', () => {
  let component: TimerStartAndPauseComponent;
  let fixture: ComponentFixture<TimerStartAndPauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerStartAndPauseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerStartAndPauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
