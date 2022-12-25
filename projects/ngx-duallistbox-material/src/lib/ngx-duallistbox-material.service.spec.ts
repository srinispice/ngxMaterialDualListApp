import { TestBed } from '@angular/core/testing';

import { NgxDuallistboxMaterialService } from './ngx-duallistbox-material.service';

describe('NgxDuallistboxMaterialService', () => {
  let service: NgxDuallistboxMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDuallistboxMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
