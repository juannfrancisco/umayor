import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarCampusComponent } from './side-bar-campus.component';

describe('SideBarCampusComponent', () => {
  let component: SideBarCampusComponent;
  let fixture: ComponentFixture<SideBarCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarCampusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
