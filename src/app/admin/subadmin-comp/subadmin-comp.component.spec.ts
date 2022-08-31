import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubadminCompComponent } from './subadmin-comp.component';

describe('SubadminCompComponent', () => {
  let component: SubadminCompComponent;
  let fixture: ComponentFixture<SubadminCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubadminCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubadminCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
