import {Component, OnDestroy, OnInit} from '@angular/core';
import {AmChartsService} from "@amcharts/amcharts3-angular";
import {GridOptions} from 'ag-grid-community';
import { TestComponent } from '../test/test.component';
import { Test1Component } from '../test1/test1.component';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.less']
})
export class GridComponent implements OnInit, OnDestroy {
  frameworkComponents: any = {
    testComponent: TestComponent,
    test1Component: Test1Component
  }
  agGridOptions: GridOptions = {
    columnDefs: [
      {
        headerName: '分组A',
        children: [
          {
            field: 'make',
            headerComponent: 'testComponent',
            cellRenderer: 'test1Component'
          },
          {field: 'model'},
        ]
      },
      {
        headerName: '分组B',
        children: [
          {field: 'price'}
        ]
      },

    ],

    rowData: [
      {make: 'Toyota', model: 'Celica', price: 35000},
      {make: 'Ford', model: 'Mondeo', price: 32000},
      {make: 'Porsche', model: 'Boxter', price: 72000}
    ]
  }

  private chart: any;

  constructor(
    private AmCharts: AmChartsService,

  ) {
  }

  ngOnInit(): void {
    this.chart = this.AmCharts.makeChart("chartdiv", {
      "theme": "none",
      "type": "serial",
      "startDuration": 2,
      "dataProvider": [{"country": "USA", "visits": 4025, "color": "#FF0F00"}, {
        "country": "China",
        "visits": 1882,
        "color": "#FF6600"
      }, {"country": "Japan", "visits": 1809, "color": "#FF9E01"}, {
        "country": "Germany",
        "visits": 1322,
        "color": "#FCD202"
      }, {"country": "UK", "visits": 1122, "color": "#F8FF01"}, {
        "country": "France",
        "visits": 1114,
        "color": "#B0DE09"
      }],
      "valueAxes": [{"position": "left", "axisAlpha": 0, "gridAlpha": 0}],
      "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "colorField": "color",
        "fillAlphas": 0.85,
        "lineAlpha": 0.1,
        "type": "column",
        "topRadius": 1,
        "valueField": "visits"
      }],
      "depth3D": 60,
      "angle": 30,
      "chartCursor": {"categoryBalloonEnabled": false, "cursorAlpha": 0, "zoomable": false},
      "categoryField": "country",
      "categoryAxis": {"gridPosition": "start", "axisAlpha": 0, "gridAlpha": 0},
      "exportConfig": {
        "menuTop": "20px",
        "menuRight": "20px",
        "menuItems": [{"icon": '/lib/3/images/export.png', "format": 'png'}]
      }
    }, 0);
  }


  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }

  hello() {

    // @ts-ignore
    this.agGridOptions.api.setRowData([
      {make: 'Toyota', model: 'Celica', price: 3500},
      {make: 'Ford', model: 'Mondeo', price: 32000},
      {make: 'Porsche', model: 'Boxter', price: 720000}
    ]);
    this.chart = this.AmCharts.makeChart("chartdiv", {
      "theme": "none",
      "type": "serial",
      "startDuration": 2,
      "dataProvider": [{"country": "USA", "visits": 500, "color": "#FF0F00"}, {
        "country": "China",
        "visits": 1000,
        "color": "#FF6600"
      }, {"country": "Japan", "visits": 6000, "color": "#FF9E01"}, {
        "country": "Germany",
        "visits": 2000,
        "color": "#FCD202"
      }, {"country": "UK", "visits": 1122, "color": "#F8FF01"}, {
        "country": "France",
        "visits": 3000,
        "color": "#B0DE09"
      }],
      "valueAxes": [{"position": "left", "axisAlpha": 0, "gridAlpha": 0}],
      "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "colorField": "color",
        "fillAlphas": 0.85,
        "lineAlpha": 0.1,
        "type": "column",
        "topRadius": 1,
        "valueField": "visits"
      }],
      "depth3D": 60,
      "angle": 30,
      "chartCursor": {"categoryBalloonEnabled": false, "cursorAlpha": 0, "zoomable": false},
      "categoryField": "country",
      "categoryAxis": {"gridPosition": "start", "axisAlpha": 0, "gridAlpha": 0},
      "exportConfig": {
        "menuTop": "20px",
        "menuRight": "20px",
        "menuItems": [{"icon": '/lib/3/images/export.png', "format": 'png'}]
      }
    }, 0);
  }
}
