import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTreePickerComponent } from './ng-tree-picker.component';

describe('NgTreePickerComponent', () => {
  let component: NgTreePickerComponent;
  let fixture: ComponentFixture<NgTreePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTreePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTreePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
