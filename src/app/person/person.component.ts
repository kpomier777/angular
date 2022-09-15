import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPerson } from './perso.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() name: string = '';
  @Input() lastName: string = '';
  @Input() age: number = 0;

  @Output() print = new EventEmitter<IPerson>();

  public person!: IPerson;

  constructor() {}

  ngOnInit() {}

  public onPrint(): void {
    this.print.emit({
      name: this.name,
      lastName: this.lastName,
      age: this.age,
    });
  }
}
