import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusVirtualComponent } from './campus-virtual.component';

describe('CampusVirtualComponent', () => {
  let component: CampusVirtualComponent;
  let fixture: ComponentFixture<CampusVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusVirtualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
