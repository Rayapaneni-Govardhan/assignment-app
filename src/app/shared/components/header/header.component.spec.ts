import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductGridViewComponent } from 'src/app/products/product-grid-view/product-grid-view.component';
import { StudentsComponent } from 'src/app/students/students.component';
import { TimerComponent } from 'src/app/timer/timer.component';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,  RouterTestingModule.withRoutes(
        [{path: 'products/grid-view', component: ProductGridViewComponent},{path: 'students', component: StudentsComponent},{path: 'timer', component: TimerComponent}]
      )],
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("Init to be Succesful", function() {
    component.navigateToHome();
    // spyOn(component.pauseTimer, 'emit');
    expect(component.navigateToHome);
  });
  it("Init to be Succesful", function() {
    component.navigateToProducts();
    // spyOn(component.pauseTimer, 'emit');
    expect(component.navigateToProducts);
  });
  it("Init to be Succesful", function() {
    component.navigateToStudents();
    // spyOn(component.pauseTimer, 'emit');
    expect(component.navigateToStudents);
  });
  it("Init to be Succesful", function() {
    component.navigateToTimer();
    // spyOn(component.pauseTimer, 'emit');
    expect(component.navigateToTimer);
  });
});
