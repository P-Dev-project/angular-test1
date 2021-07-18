import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployesSiegeComponent } from './employes-siege.component';

describe('EmployesSiegeComponent', () => {
  let component: EmployesSiegeComponent;
  let fixture: ComponentFixture<EmployesSiegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployesSiegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployesSiegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
