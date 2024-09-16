import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClinicalImagingResultsComponent } from './clinical-imaging-results.component';
import { By } from '@angular/platform-browser';

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
