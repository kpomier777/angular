import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AutomobileComponent } from '../components/automobile/automobile.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AutomobileComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
