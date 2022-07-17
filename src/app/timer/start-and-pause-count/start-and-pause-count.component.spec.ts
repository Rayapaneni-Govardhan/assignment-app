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
});
