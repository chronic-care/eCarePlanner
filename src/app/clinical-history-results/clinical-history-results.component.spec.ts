import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalHistoryResultsComponent } from './clinical-history-results.component';

describe('ClinicalHistoryResultsComponent', () => {
  let component: ClinicalHistoryResultsComponent;
  let fixture: ComponentFixture<ClinicalHistoryResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalHistoryResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalHistoryResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
