import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

import { DynamicDivsComponent } from './dynamic-divs.component';

describe('DynamicDivsComponent', () => {
  let component: DynamicDivsComponent;
  let fixture: ComponentFixture<DynamicDivsComponent>;
  const toastrService = {
    success: (
      message?: string,
      title?: string,
      override?: Partial<IndividualConfig>
    ) => {},
    error: (
      message?: string,
      title?: string,
      override?: Partial<IndividualConfig>
    ) => {},
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicDivsComponent],
      providers: [{ provide: ToastrService, useValue: toastrService }],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicDivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
