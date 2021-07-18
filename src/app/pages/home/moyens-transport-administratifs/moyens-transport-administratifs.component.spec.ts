import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoyensTransportAdministratifsComponent } from './moyens-transport-administratifs.component';

describe('MoyensTransportAdministratifsComponent', () => {
  let component: MoyensTransportAdministratifsComponent;
  let fixture: ComponentFixture<MoyensTransportAdministratifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoyensTransportAdministratifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoyensTransportAdministratifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
