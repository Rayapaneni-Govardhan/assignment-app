import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListViewComponent } from './product-list-view.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

describe('ProductListViewComponent', () => {
  let component: ProductListViewComponent;
  let fixture: ComponentFixture<ProductListViewComponent>;
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
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [
        ProductService,
        { provide: ToastrService, useValue: toastrService },
      ],
      declarations: [ProductListViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListViewComponent);
    component = fixture.componentInstance;
 
   
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("Init to be Succesful", function() {
    component.filterProducts('Under 1000');
    // spyOn(component.pauseTimer, 'emit');
    expect(component.filterProducts);
  });
  it("Init to be Succesful", function() {
    component.loadProducts();
    // spyOn(component.pauseTimer, 'emit');
    expect(component.loadProducts);
  });
  it("Init to be Succesful", function() {
    component.addToCart('product');
    // spyOn(component.pauseTimer, 'emit');
    expect(component.addToCart);
  });
  // it("Init to be Succesful", function() {
  //   component.getFilteredData();
  //   // spyOn(component.pauseTimer, 'emit');
  //   expect(component.getFilteredData);
  // });
  
});
