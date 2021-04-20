import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCampusComponent } from './home-campus.component';

describe('HomeCampusComponent', () => {
  let component: HomeCampusComponent;
  let fixture: ComponentFixture<HomeCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCampusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
