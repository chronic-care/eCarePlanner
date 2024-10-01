import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import moment from 'moment';

@Component({
  selector: 'app-inactive-diagnosis-panel',
  templateUrl: './inactive-diagnosis-panel.component.html',
  styleUrls: ['./inactive-diagnosis-panel.component.css']
})
export class InactiveDiagnosisPanelComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['code', 'asserter', 'firstOnset', 'firstRecorded', 'provenance'];
  dataSource: MatTableDataSource<any>;
  showFilter: boolean = false;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dataservice: DataService) {}

  ngOnInit(): void {
    // Convert date strings to Date objects for proper sorting
    const conditionsWithConvertedDates = this.dataservice.conditions.inactiveConditions.map(condition => ({
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
        case 'provenance':
          return item[property].text.toUpperCase();
        default:
          return item[property];
      }
    };
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

    this.dataSource.filterPredicate = (data: any, filter: string): boolean => {
      return data.code.text.toLowerCase().includes(filter);
    };

    this.dataSource.filter = filterValue;
  }

  toggleFilter(): void {
    this.showFilter = !this.showFilter;
  }
}
