import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent
  implements
    OnInit,
    AfterContentInit,
    DoCheck,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  @Input() name: string = '';

  constructor() {}
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngDoCheck(): void {
    console.log('Do Check');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngOnInit() {}
}
