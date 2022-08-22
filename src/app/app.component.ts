import { Component } from '@angular/core';

import { data } from '../db/automobiles';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  saleList: any[];
  rentalList: any[];
  saleSelected: any[] = [];
  rentalSelected: any[] = [];

  constructor() {
    const db = Object.entries(data).map((entry) => {
      return {
        id: entry[0],
        ...entry[1],
        selectedColor: 'white',
      };
    });

    this.saleList = db.filter((item) => item.category === 'sale');
    this.rentalList = db.filter((item) => item.category === 'rental');
  }

  saleController(data: any) {
    const index = this.saleSelected.findIndex((item) => item.id === data.id);

    if (index >= 0) this.saleSelected.splice(index, 1);
    else {
      this.saleSelected.push({
        id: data.id,
        price: data.price,
        moneyType: data.moneyType,
      });
    }
  }

  rentalController(data: any) {
    const index = this.rentalSelected.findIndex((item) => item.id === data.id);

    if (index >= 0) this.rentalSelected.splice(index, 1);
    else {
      this.rentalSelected.push({
        id: data.id,
        price: data.price,
        moneyType: data.moneyType,
      });
    }
  }
}
