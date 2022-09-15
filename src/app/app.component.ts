import { Component } from '@angular/core';
import { IPerson } from './person/perso.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'test';
  public person!: IPerson;

  getPrint(event: any) {
    console.log('Hi parent component', event);
    this.person = event;
  }
}
