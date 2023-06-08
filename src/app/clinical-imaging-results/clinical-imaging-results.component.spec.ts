import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalImagingResultsComponent } from './clinical-imaging-results.component';

describe('ClinicalImagingResultsComponent', () => {
  let component: ClinicalImagingResultsComponent;
  let fixture: ComponentFixture<ClinicalImagingResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalImagingResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalImagingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
