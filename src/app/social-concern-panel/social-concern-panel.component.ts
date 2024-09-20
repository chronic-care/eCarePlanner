import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';

@Component({
  selector: 'app-social-concern-panel',
  templateUrl: './social-concern-panel.component.html',
  styleUrls: ['./social-concern-panel.component.css']
})
export class SocialConcernPanelComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<any>;
  showFilter = false;

  @ViewChild(MatSort) sort: MatSort;

  // displayedColumns = ['name', 'data', 'date'];
  displayedColumns: string[] = ['code', 'status', 'firstRecorded'];

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    const conditionsWithConvertedDates = this.dataService.conditions.activeConcerns.map(condition => ({
      ...condition,
      firstOnsetAsDate: moment(condition.firstOnsetAsText, 'MMM DD, YYYY').toDate(),
      firstRecordedAsDate: moment(condition.firstRecordedAsText, 'MMM DD, YYYY').toDate()
    }));

    this.dataSource = new MatTableDataSource(conditionsWithConvertedDates);

    this.dataSource.sortingDataAccessor = (item, property): string | number => {
      switch (property) {
        case "firstRecorded":
          return item.firstRecordedAsDate ? item.firstRecordedAsDate.getTime() : item.firstRecordedAsText;
        case 'firstOnset':
          return item.firstOnsetAsDate ? item.firstOnsetAsDate.getTime() : item.firstOnsetAsText;
        case 'code':
          return item[property].text.toUpperCase();
        default:
          return item[property];
      }
    };

    // this.dataSource = new MatTableDataSource(this.dataService.conditions.activeConcerns);

    // Setup sorting for the data source
    // this.dataSource.sortingDataAccessor = (item, property): string | number => {
    //   switch (property) {
    //     case 'date':
    //       return item.dateAsDate ? item.dateAsDate.getTime() : item.date; // Return timestamp for date sorting
    //     default:
    //       return item[property];
    //   }
    // };
  }

  ngAfterViewInit(): void {
    // Assign the sort to the data source
    this.dataSource.sort = this.sort;
  }

  toggleFilter(): void {
    this.showFilter = !this.showFilter;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
