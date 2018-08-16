import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'mat-cc-ng-tree-picker',
  templateUrl: 'ng-tree-picker.component.html',
  styles: [],
  providers: [{ provide: MatFormFieldControl, useExisting: NgTreePickerComponent }]
})
export class NgTreePickerComponent implements OnInit {

  treePickerForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.treePickerForm =  fb.group({
      'tree-picker-input': ''
    });
  }

  ngOnInit() {
  }

}
