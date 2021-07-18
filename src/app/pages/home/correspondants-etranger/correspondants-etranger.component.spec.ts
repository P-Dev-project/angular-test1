import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondantsEtrangerComponent } from './correspondants-etranger.component';

describe('CorrespondantsEtrangerComponent', () => {
  let component: CorrespondantsEtrangerComponent;
  let fixture: ComponentFixture<CorrespondantsEtrangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrespondantsEtrangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrespondantsEtrangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
