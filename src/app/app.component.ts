import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project';
  color: string = 'green';

  getMessage(event: any) {
    console.log('evento al padre:', event);
  }
}
