import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAndPauseCountComponent } from './start-and-pause-count.component';

describe('StartAndPauseCountComponent', () => {
  let component: StartAndPauseCountComponent;
  let fixture: ComponentFixture<StartAndPauseCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartAndPauseCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartAndPauseCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("ngOnChanges to be Succesful", function() {
    component.ngOnChanges({});
    // spyOn(component.pauseTimer, 'emit');
    expect(component.ngOnChanges);
  });
  it("Init to be Succesful", function() {
    let event = [
      {
        eventType: 'Started',
        count: 7,
        time: '23:33:01',
        date: 'Mon Jul 18 2022',
      },
    ];
    component.getCount(event);
    expect(component.getCount);
  });
});
