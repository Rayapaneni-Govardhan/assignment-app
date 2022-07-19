import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss'],
})
export class ProductListViewComponent implements OnInit {
  products: any;
  backUpProducts: any;
  priceFilterFlag: boolean = false;
  priceFilters: any = [
    {
      label: 'Under ₹1,000',
      value: [1000],
      type: 'under',
      selected: false,
    },
    {
      label: '₹1,000 - ₹5,000',
      value: [1000, 5000],
      type: 'range',
      selected: false,
    },
    {
      label: '₹5,000 - ₹10,000',
      value: [5000, 10000],
      type: 'range',
      selected: false,
    },
    {
      label: '₹10,000 - ₹20,000',
      value: [10000, 20000],
      type: 'range',
      selected: false,
    },
    {
      label: 'Over ₹20,000',
      value: [20000],
      type: 'over',
      selected: false,
    },
  ];
  pageStartIndex: number = 0;
  pageEndIndex: number = 12;
  loadedProducts: boolean = false;
  productsSubscription$:Subscription;

  constructor(
    private productService: ProductService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }
  filterProducts(selectedFilter: any, clear?: any) {
    this.priceFilters.map((ele: any) => {
      ele.selected = false;
    });
    this.loadedProducts = true;
    if (selectedFilter) {
      console.log(selectedFilter);
      this.priceFilters.map((ele: any) => {
        if (selectedFilter.label == ele.label) {
          ele.selected = true;
        }
      });
    }
    if (clear) {
      // this.products = this.backUpProducts;
      this.loadProducts();
    } else {
      this.getFilteredData();
    }
    this.showPriceFilter();
  }
  getFilteredData() {
    let filteredData: any = [];
    // this.priceFilters.forEach((ele: any) => {
    let selectedFilter = this.priceFilters.filter((ele: any) => {
      if (ele.selected == true) {
        return ele;
      }
    });
    console.log(selectedFilter);

    if (selectedFilter.length > 0) {
      if (selectedFilter[0].type == 'under') {
        this.backUpProducts.forEach((product: any) => {
          if (product.price <= selectedFilter[0].value[0]) {
            filteredData.push(product);
          }
        });
      } else if (selectedFilter[0].type == 'range') {
        this.backUpProducts.forEach((product: any) => {
          if (
            product.price >= selectedFilter[0].value[0] &&
            product.price <= selectedFilter[0].value[1]
          ) {
            filteredData.push(product);
          }
        });
      } else if (selectedFilter[0].type == 'over') {
        this.backUpProducts.forEach((product: any) => {
          if (product.price > selectedFilter[0].value[0]) {
            filteredData.push(product);
          }
        });
      }
    }
    console.log(filteredData);
    this.products = filteredData;

    // });
  }
  loadMore() {
    console.log('Scrolled');

    let moreProducts: any = this.backUpProducts.slice(
      this.pageStartIndex,
      this.pageEndIndex
    );
    moreProducts.forEach((ele: any) => {
      this.products.push(ele);
    });
    this.pageStartIndex += 12;
    this.pageEndIndex += 12;
    if (this.pageStartIndex > this.backUpProducts.length) {
      this.loadedProducts = true;
    }
  }
  loadProducts() {
    this.pageStartIndex = 0;
    this.pageEndIndex = 12;
    this.loadedProducts = false;
    // this.productService.getProducts().subscribe((resp: any) => {
    //   console.log(resp);
    // });
    this.productsSubscription$=this.productService.getProductsData().subscribe((resp: any) => {
      // this.products = resp;
      // this.
      this.products = resp.slice(this.pageStartIndex, this.pageEndIndex);
      this.pageStartIndex += 12;
      this.pageEndIndex += 12;
      // if(this.pageEndIndex>this.backUpProducts.length)

      this.backUpProducts = JSON.parse(JSON.stringify(resp));
    });
  
  }
  showPriceFilter() {
    this.priceFilterFlag = !this.priceFilterFlag;
  }
  addToCart(productName: any) {
    this.toastr.success(productName + ' Added to the cart!');
  }
  ngOnDestroy(){
    this.productsSubscription$.unsubscribe();
  }
}
