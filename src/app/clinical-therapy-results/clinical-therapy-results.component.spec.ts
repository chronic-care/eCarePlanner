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

  it('should show content when showComponent is true', () => {
    component.showComponent = true;
    fixture.detectChanges();
    const groupHeader = fixture.debugElement.query(By.css('.group-header'));
    expect(groupHeader).toBeTruthy();
  });

  it('should hide content when showComponent is false', () => {
    component.showComponent = false;
    fixture.detectChanges();
    const groupHeader = fixture.debugElement.query(By.css('.group-header'));
    expect(groupHeader).toBeFalsy();
  });
});
