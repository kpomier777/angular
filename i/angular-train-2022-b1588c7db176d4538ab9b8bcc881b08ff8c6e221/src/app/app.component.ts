import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hola ';
  data = [1,2,3,4,5,6,7,8];


  constructor(private router: Router) {
    console.log(this.pureExample(3,3))
    console.log(this.pureExample(2,3))
    console.log(this.pureExample(3,11))
    console.log(this.pureExample(23,3))

    console.log('Impure')
    console.log(this.impureExample(3,3))
    console.log(this.impureExample(2,3))
    console.log(this.impureExample(3,11))
    console.log(this.impureExample(23,3))

  }

  pureExample(a : number , b:number):number{

    return a+b;

  }

  impureExample(a:number , b:number){
    return (a + b + Math.random()).toFixed()
  }


  goToUser(){
    this.router.navigate(['/user'])
  }
  goToRoot(){
    this.router.navigate(['/'])
  }
}
