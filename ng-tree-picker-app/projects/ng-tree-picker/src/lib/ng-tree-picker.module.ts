import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgTreePickerComponent } from './ng-tree-picker.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  declarations: [NgTreePickerComponent],
  exports: [NgTreePickerComponent]
})
export class NgTreePickerModule { }
