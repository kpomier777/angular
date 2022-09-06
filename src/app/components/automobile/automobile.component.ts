import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import moment from "moment";

@Component({
  selector: "automobile",
  templateUrl: "./automobile.component.html",
  styleUrls: ["./automobile.component.css"],
})
export class AutomobileComponent implements OnInit {
  active: boolean = false;

  @Input() car!: any;

  @Output() change = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  dateController(date: string) {
    return moment(date).format("DD/MM/YYYY");
  }

  changeController(car: any, type: string, value?: string) {
    this.change.emit({ car, type, value });
  }
}
