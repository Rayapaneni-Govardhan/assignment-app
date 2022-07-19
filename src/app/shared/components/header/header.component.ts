import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateToProducts() {
    this.router.navigate(['products/grid-view']);
  }
  navigateToTimer() {
    this.router.navigate(['timer']);
  }
  navigateToTimerWithSubjects() {
    this.router.navigate(['timer-with-subjects']);
  }
  navigateToHome() {
    this.router.navigate(['']);
  }
  navigateToStudents() {
    this.router.navigate(['students']);
  }
  navigateToDynamicDivs() {
    this.router.navigate(['dynamic-divs']);
  }
}
