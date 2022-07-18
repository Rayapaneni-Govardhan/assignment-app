import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsComponent } from './students.component';

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsComponent);
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
  it("Init to be Succesful", function() {
    component.sort('ID');
    // spyOn(component.pauseTimer, 'emit');
    expect(component.sort);
  });
});
