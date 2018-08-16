import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgTreePickerModule } from 'ng-tree-picker';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgTreePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
