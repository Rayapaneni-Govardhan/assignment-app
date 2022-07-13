import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss'],
})
export class ProductListViewComponent implements OnInit {
  products: any;
  priceFilterFlag: boolean = false;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts() {
    this.productService.getProductsData().subscribe((resp) => {
      this.products = resp;
     
    });
   
    // this.productService.getProducts().subscribe((resp:any) => {
    //   console.log(resp);
    // this.products = resp;
    // });
  }
  showPriceFilter() {
    this.priceFilterFlag = !this.priceFilterFlag;
  }
}
