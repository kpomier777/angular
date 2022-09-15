import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class Test1Component implements OnInit, OnChanges {
  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('on Init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on Changes');
  }
}
