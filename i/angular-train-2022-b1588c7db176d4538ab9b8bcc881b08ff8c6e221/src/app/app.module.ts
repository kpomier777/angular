import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurePipe } from './pure.pipe';
import { ImpurePipe } from './impure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PurePipe,
    ImpurePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
