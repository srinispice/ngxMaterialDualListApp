import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDuallistboxMaterialComponent } from './ngx-duallistbox-material.component';

describe('NgxDuallistboxMaterialComponent', () => {
  let component: NgxDuallistboxMaterialComponent;
  let fixture: ComponentFixture<NgxDuallistboxMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDuallistboxMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDuallistboxMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
