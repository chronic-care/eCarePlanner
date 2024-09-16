import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClinicalExamResultsComponent } from './clinical-exam-results.component';

describe('ClinicalExamResultsComponent', () => {
  let component: ClinicalExamResultsComponent;
  let fixture: ComponentFixture<ClinicalExamResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalExamResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalExamResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide component when showComponent is false', () => {
    component.showComponent = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.group-header')).toBeNull();
  });

  it('should show component when showComponent is true', () => {
    component.showComponent = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.group-header').textContent).toContain('Exam');
  });
});
