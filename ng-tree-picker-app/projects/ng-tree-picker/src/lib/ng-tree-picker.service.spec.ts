import { TestBed, inject } from '@angular/core/testing';

import { NgTreePickerService } from './ng-tree-picker.service';

describe('NgTreePickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgTreePickerService]
    });
  });

  it('should be created', inject([NgTreePickerService], (service: NgTreePickerService) => {
    expect(service).toBeTruthy();
  }));
});
