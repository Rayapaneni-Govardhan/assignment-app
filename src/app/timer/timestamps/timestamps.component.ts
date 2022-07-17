import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timestamps',
  templateUrl: './timestamps.component.html',
  styleUrls: ['./timestamps.component.scss']
})
export class TimestampsComponent implements OnInit {
  @Input() events: string | undefined;
  eventsData: any = [];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.eventsData = this.events;
  }

}
