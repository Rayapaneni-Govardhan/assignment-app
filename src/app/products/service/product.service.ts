import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsSource$ = new BehaviorSubject<any>('');

  public products$: Observable<any> = this.productsSource$.asObservable();

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }
  setProductsData(data: any) {
    this.productsSource$.next(data);
  }

  getProductsData() {
    return this.products$;
  }
}
