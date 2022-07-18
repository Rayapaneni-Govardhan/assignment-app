import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { BannerComponent } from './banner.component';
import { ProductGridViewComponent } from '../product-grid-view/product-grid-view.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'products/grid-view', component: ProductGridViewComponent },
        ]),
      ],
      declarations: [BannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Init to be Succesful', function () {
    component.navigateToProducts();
    // spyOn(component.pauseTimer, 'emit');
    expect(component.navigateToProducts);
  });
});
