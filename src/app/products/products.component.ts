import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any;
  productsSubscription$: Subscription;
  isLoaded:boolean=false;
  constructor(private productService: ProductService, private router: Router,private toastr: ToastrService) {}

  ngOnInit(): void {
    console.log('products');

    this.productsSubscription$ = this.productService
      .getProducts()
      .subscribe((resp: any) => {
        console.log(resp);
        this.products = resp;
        this.products.map((pro: any) => {
          pro.price = Math.round(pro.price * 79);
          pro.ratingValue = new Array(Math.floor(pro.rating.rate));
          pro.noRating = new Array(5 - Math.floor(pro.rating.rate));
        });
        this.productService.setProductsData(this.products);
        this.isLoaded=true;
      },error=>{
        this.toastr.error(
          'Something went wrong!'
        );
      
      });
  }
  ngOnDestroy() {
    this.productsSubscription$.unsubscribe();
  }
}
