import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hola ';

  constructor() {
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
}
