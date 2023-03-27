import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Color } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { DataService } from '../services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { EgfrTableData } from '../datamodel/egfr';
import { formatEgfrResult, reformatYYYYMMDD } from '../util/utility-functions';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';

@Component({
  selector: 'app-e-gfr',
  templateUrl: './e-gfr.component.html',
  styleUrls: ['./e-gfr.component.css']
})
export class EGFRComponent implements OnInit, AfterViewInit {

  egfrDataSource: MatTableDataSource<EgfrTableData>;
  egfrRowMax = 7;

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
    },
  ];
  lineChartLegend = false;
  lineChartPlugins = [pluginAnnotations];
  lineChartType = 'line';

  constructor(public dataservice: DataService) {
  }

  displayedColumns = ['date', 'egfr'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.egfrDataSource = this.dataservice.egfrDataSource;
  }

  ngAfterViewInit(): void {
    // todo: fix below, paginator doesn't work when assigned, shows all rows, doesn't limit to max, paging doesn't work
    if (this.egfrDataSource.data.length > this.egfrRowMax) {
      this.egfrDataSource.paginator = this.paginator;
    }
    this.egfrDataSource.sort = this.sort;
    this.egfrDataSource.sortingDataAccessor = (data: EgfrTableData, header: string) => {
      switch (header) {
        case ('date'): {
          return moment(data.date).unix();
        }
        default: {
          return data[header];
        }
      }
    };
  }

  EgfrResult(egfr: EgfrTableData): string {
    return formatEgfrResult(egfr.egfr.value, egfr.unit);
  }

  getEgfrRowCssClass(egfr: EgfrTableData): string {
    let cssClass = '';
    const val = egfr.egfr;
    if (val) {
      switch (true) {
        case (val >= 60):
          cssClass = 'resultGood';
          break;
        case (val < 60 && val >= 15):
          cssClass = 'resultBorderline';
          break;
        case (val < 15):
          cssClass = 'resultCritical';
          break;
        default:
          break;
      }
    }
    return cssClass;
  }

  ddlChange(indexStr: string): void {
    if (!indexStr) {
      this.dataservice.emptyChart();
      return;
    }
    else {
      const index: number = parseInt(indexStr);
      this.dataservice.filterDataSet(index);
    }
  }
}
