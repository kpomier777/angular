import { Component } from "@angular/core";

import { data } from "../db/automobiles";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  cars: any[];
  carsA: any[];
  carsB: any[];

  TNB: number = 0;
  TND: number = 0;
  TUB: number = 0;
  TUD: number = 0;

  constructor() {
    this.cars = Object.entries(data).map((entry) => ({
      id: entry[0],
      ...entry[1],
    }));

    this.carsA = this.cars.filter((car) => car.category === "sale");
    this.carsB = this.cars.filter((car) => car.category === "rental");
  }

  onChange({ car, type, value }) {
    const index = this.cars.findIndex((item) => item.id === car.id);

    if (type === "currentColor") this.cars[index].currentColor = value;

    if (type === "process") {
      this.cars[index].status = "disable";

      if (car.category === "sale" && car.moneyType === "BS") {
        this.TNB = this.TNB + car.price;
      }

      if (car.category === "sale" && car.moneyType === "USD") {
        this.TND = this.TND + car.price;
      }

      if (car.category === "rental" && car.moneyType === "BS") {
        this.TUB = this.TUB + car.price;
      }

      if (car.category === "rental" && car.moneyType === "USD") {
        this.TUD = this.TUD + car.price;
      }
    }
  }
}
