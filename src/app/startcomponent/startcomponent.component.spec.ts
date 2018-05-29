import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartcomponentComponent } from './startcomponent.component';

describe('StartcomponentComponent', () => {
  let component: StartcomponentComponent;
  let fixture: ComponentFixture<StartcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
