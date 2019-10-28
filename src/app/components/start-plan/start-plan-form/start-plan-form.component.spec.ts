import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPlanFormComponent } from './start-plan-form.component';

describe('StartPlanFormComponent', () => {
  let component: StartPlanFormComponent;
  let fixture: ComponentFixture<StartPlanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPlanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
