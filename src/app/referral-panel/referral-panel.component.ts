import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MccReferralSummary } from 'e-care-common-data-services/build/main/types/mcc-types';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-referral-panel',
  templateUrl: './referral-panel.component.html',
  styleUrls: ['./referral-panel.component.css']
})
export class ReferralPanelComponent implements OnInit {
  dataSource: MatTableDataSource<MccReferralSummary>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dataService: DataService) { }
  displayedColumns = ['purpose', 'date', 'referrer', 'receiver'];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataService.referrals);
    this.dataSource.sortingDataAccessor = (item, property): string | number => {
      switch (property) {
        case 'purpose': return item[property].text;
        default: return item[property];
      }
    };
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
