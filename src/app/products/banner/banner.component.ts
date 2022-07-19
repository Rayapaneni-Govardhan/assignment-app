import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  isLoaded:boolean=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded=true;
    }, 500);
  }
  navigateToProducts() {
    this.router.navigate(['products/grid-view']);
  }

}
