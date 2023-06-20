import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MccEducationSummary } from 'e-care-common-data-services/build/main/types/mcc-types';
import moment from 'moment';
import { Constants } from '../common/constants';
import { EducationSummary, SocialConcern } from '../generated-data-api';
import { DataService } from '../services/data.service';

declare var window: any;

@Component({
  selector: 'app-education-panel',
  templateUrl: './education-panel.component.html',
  styleUrls: ['./education-panel.component.css']
})
export class EducationPanelComponent implements OnInit {
  dataSource: MatTableDataSource<MccEducationSummary>;
  displayedColumns = ['topic', 'displayDate', 'performer', 'reasons', 'outcome', 'status'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataService.education);
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
