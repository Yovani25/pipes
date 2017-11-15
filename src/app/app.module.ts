import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CapitalizadoPipe} from './pipes/capitalizado.pipe';

@NgModule({
  declarations: [
    CapitalizadoPipe,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
