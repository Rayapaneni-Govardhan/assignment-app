import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dynamic-divs',
  templateUrl: './dynamic-divs.component.html',
  styleUrls: ['./dynamic-divs.component.scss'],
})
export class DynamicDivsComponent implements OnInit {
  loadedDivs: boolean = false;

  cardCount: number = 1;
  divElements: any = [];

  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.loadDivElements();
  }

  loadMore() {
    console.log('Scrolled');

    for (let index = this.cardCount; index <= this.cardCount + 16; index++) {
      let div = {
        key: index,
        data: '',
      };
      this.divElements.push(div);
    }
    this.cardCount += 16;
  }
  loadDivElements() {
    this.divElements = [];
    this.cardCount = 1;

    for (let index = this.cardCount; index <= 16; index++) {
      let div = {
        key: index,
        data: '',
      };
      this.divElements.push(div);
    }
    console.log(this.divElements);

    this.cardCount += 16;
  }

  showAlert(div: any) {
    this.toastr.success(
      'Button in ' + this.getOrdinalNum(div.key) + ' div is Clicked!'
    );
  }
  getOrdinalNum = (number) => {
    let selector;

    if (number <= 0) {
      selector = 4;
    } else if ((number > 3 && number < 21) || number % 10 > 3) {
      selector = 0;
    } else {
      selector = number % 10;
    }

    return number + ['th', 'st', 'nd', 'rd', ''][selector];
  };
}
