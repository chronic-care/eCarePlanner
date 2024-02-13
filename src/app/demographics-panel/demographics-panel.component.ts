import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-demographics-panel',
  templateUrl: './demographics-panel.component.html',
  styleUrls: ['./demographics-panel.component.css']
})
export class DemographicsPanelComponent implements OnInit {
  constructor(public dataservice: DataService) { }
  ngOnInit(): void {
  }

  getPeriodText(): string {
    if (!this.dataservice.careplan===null) {
    const start = this.dataservice.careplan.period.start;
    const end  = this.dataservice.careplan.period.end;
    const out = '';
    if (end == null || end === '') {
      if (start === null || start === '' || start === "undefined") {
        return 'undefined';
      }
      return out.concat(start, ' onward');
    }
    if (start === null || start === '') {
      out.concat('until ', end);
    }
    return out.concat(start, ' to ', end);
  }
  return '';
  }
  getAddresses(): string {

    if (!this.dataservice.careplan===null) {
      const references = this.dataservice.careplan.addresses.map(address => address.reference);
      return references?.join(', ')
    }
    return '';
  }
  getCategories(): string {
    if (!this.dataservice.careplan===null) {
    return this.dataservice.careplan.category?.join(', ')
  }
  return '';
  }
  getNotes(): string {
    if (!this.dataservice.careplan===null) {
    return this.dataservice.careplan.note?.join(', ')
  }
  return '';
  }
}
