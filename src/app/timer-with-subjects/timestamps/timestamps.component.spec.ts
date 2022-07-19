import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimestampsComponent } from './timestamps.component';

describe('TimestampsComponent', () => {
  let component: TimestampsComponent;
  let fixture: ComponentFixture<TimestampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimestampsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimestampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
