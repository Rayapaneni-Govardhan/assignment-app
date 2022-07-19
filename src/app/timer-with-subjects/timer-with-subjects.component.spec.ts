import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerWithSubjectsComponent } from './timer-with-subjects.component';

describe('TimerWithSubjectsComponent', () => {
  let component: TimerWithSubjectsComponent;
  let fixture: ComponentFixture<TimerWithSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerWithSubjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimerWithSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('ngOnInit to be successful', function () {
    component.ngOnInit();
    expect(component.ngOnInit);
  });
  it('ngOnDestroy to be successful', function () {
    component.ngOnDestroy();
    expect(component.ngOnDestroy);
  });
});
