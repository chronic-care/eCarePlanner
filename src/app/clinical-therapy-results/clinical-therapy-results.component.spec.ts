import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalTherapyResultsComponent } from './clinical-therapy-results.component';

describe('ClinicalTherapyResultsComponent', () => {
  let component: ClinicalTherapyResultsComponent;
  let fixture: ComponentFixture<ClinicalTherapyResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalTherapyResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalTherapyResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
