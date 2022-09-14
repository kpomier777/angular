import { Component } from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hola ';

  constructor(private userService: UserService) {

  }

  getToken(){
    console.log(this.userService.getToken())
  }
}
