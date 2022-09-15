import { Component } from '@angular/core';
import { IPerson } from './person/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'test';
  public person!: IPerson;

  public student: string = 'example cristian';

  public a = 0;
  public b = 0;

  getPrint(event: any) {
    console.log('Hi parent component', event);
    this.person = event;
  }

  getLastName(event: any): void {
    console.log('Last Name : ', event);
  }


  printName(name : any ) {
    console.log('Name : ' , name )
  }
}
