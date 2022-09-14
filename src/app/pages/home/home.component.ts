import {Component, OnInit} from '@angular/core';
import {CarService} from "../services/car.service";
@Component({
  selector: 'app-auth',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.carService.getAllCars().subscribe(res => {
      console.log('RESPONSE CARS: ', res)
    })
  }

}
