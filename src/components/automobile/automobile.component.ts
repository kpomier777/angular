import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import moment from 'moment';

@Component({
  selector: 'automobile',
  templateUrl: './automobile.component.html',
  styleUrls: ['./automobile.component.css'],
})
export class AutomobileComponent implements OnInit {
  @Input() data!: any;
  @Output() emitSelected = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  formatDate(timestamp: string) {
    return moment(timestamp).format('DD/MM/YYYY');
  }
}
