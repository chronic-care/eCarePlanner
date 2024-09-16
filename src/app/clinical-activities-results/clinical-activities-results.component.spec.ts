import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClinicalActivitiesResultsComponent } from './clinical-activities-results.component';
import { By } from '@angular/platform-browser';

describe('ClinicalActivitiesResultsComponent', () => {
  let component: ClinicalActivitiesResultsComponent;
  let fixture: ComponentFixture<ClinicalActivitiesResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalActivitiesResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalActivitiesResultsComponent);
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
