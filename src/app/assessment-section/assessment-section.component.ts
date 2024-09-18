import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-assessment-section',
  templateUrl: './assessment-section.component.html',
  styleUrls: ['./assessment-section.component.css']
})
export class AssessmentSectionComponent {
  @Input() assessmentData: any;
}
