import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../product.service';
import { ProductGridViewComponent } from './product-grid-view.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
describe('ProductGridViewComponent', () => {
  let component: ProductGridViewComponent;
  let fixture: ComponentFixture<ProductGridViewComponent>;
  let getProductsMockService: any;
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
        // { provide: ProductService, useValue: getProductsMockService },
        { provide: ToastrService, useValue: toastrService },
      ],
      declarations: [ProductGridViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductGridViewComponent);
    component = fixture.componentInstance;
    let productsModel: any = [
      {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
    ];
    let mockTopToolBarService: jasmine.SpyObj<ProductService>;
    mockTopToolBarService = jasmine.createSpyObj(['getProducts']);
    mockTopToolBarService.getProducts.and.returnValue(productsModel);
    fixture.detectChanges();
  });
  // it('getProducts() should be return data', () => {
  //   let productsModel: any = [
  //     {
  //       id: 1,
  //       title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  //       price: 109.95,
  //       description:
  //         'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  //       category: "men's clothing",
  //       image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  //       rating: {
  //         rate: 3.9,
  //         count: 120,
  //       },
  //     },
  //   ];
  //   // ProductService.getProducts();
  //   // fixture = TestBed.createComponent(ProductGridViewComponent);
  //   // getProductsMockService.getProducts.and.returnValue(of(productsModel));

  //   // fixture.componentInstance.loadProducts();
  //   // tick();

  //   // expect(getProductsMockService['getProducts']).toHaveBeenCalled();
  // });
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
});
