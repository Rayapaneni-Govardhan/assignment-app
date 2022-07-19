import { TestBed } from '@angular/core/testing';

import { TimerWithSubjectsService } from './timer-with-subjects.service';

describe('TimerWithSubjectsService', () => {
  let service: TimerWithSubjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerWithSubjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
