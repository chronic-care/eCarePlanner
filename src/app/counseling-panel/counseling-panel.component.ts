import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MccCounselingSummary } from 'e-care-common-data-services/build/main/types/mcc-types';
import moment from 'moment';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-counseling-panel',
  templateUrl: './counseling-panel.component.html',
  styleUrls: ['./counseling-panel.component.css']
})
export class CounselingPanelComponent implements OnInit {
  dataSource: MatTableDataSource<MccCounselingSummary>;
  displayedColumns = ['topic', 'displayDate', 'performer', 'reasons', 'outcome', 'status'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataService.counseling);
    this.dataSource.sortingDataAccessor = (item, property): string | number => {
      switch (property) {
        case 'topic': return item[property].text;
        case 'displayDate': return moment(item[property]).unix();
        case 'outcome': return item[property].text;
        default: return item[property];
      }
    };
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
