import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTopHeadComponent } from './main-top-head.component';

describe('MainTopHeadComponent', () => {
  let component: MainTopHeadComponent;
  let fixture: ComponentFixture<MainTopHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTopHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTopHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
