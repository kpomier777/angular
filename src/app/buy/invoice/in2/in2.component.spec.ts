import { ComponentFixture, TestBed } from '@angular/core/testing';

import { In2Component } from './in2.component';

describe('In2Component', () => {
  let component: In2Component;
  let fixture: ComponentFixture<In2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ In2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(In2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
