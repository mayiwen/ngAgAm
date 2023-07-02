import {Component, OnDestroy, OnInit} from '@angular/core';
import {AmChartsService} from "@amcharts/amcharts3-angular";
import {GridOptions, ViewportChangedEvent} from 'ag-grid-community';
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
    rowModelType:"infinite",
    cacheBlockSize: 10, // 默认是20个 每次加载的数据
    onViewportChanged: (event: ViewportChangedEvent) => {
      // here you have access to event.firstRow and event.lastRow
      // On initialization, firstRow is 0 and lastRow -1
      console.log('这是打印的事件')
      console.log(event)
    },
    columnDefs: [
      // {
      //   headerName: '分组A',
      //   children: [
      //     {
      //       field: 'make',
      //       headerComponent: 'testComponent',
      //       cellRenderer: 'test1Component'
      //     },
      //     {field: 'model'},
      //   ]
      // },
      // {
      //   headerName: '分组B',
      //   children: [
      //     {field: 'price'}
      //   ]
      // },
      {
        headerName: 'ID',
        maxWidth: 100,
        valueGetter: 'node.id',
        cellRenderer: (params) => {
          if (params.value !== undefined) {
            return params.value;
          } else {
            return '<img src="https://www.ag-grid.com/example-assets/loading.gif">';
          }
        },
      },
      { field: 'athlete', minWidth: 150 },
      { field: 'age' },
      { field: 'country', minWidth: 150 },
      { field: 'year' },
      { field: 'date', minWidth: 150 },
      { field: 'sport', minWidth: 150 },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' },
    ],

    rowData: [
      {make: 'Toyota', model: 'Celica', price: 3500},
      {make: 'Ford', model: 'Mondeo', price: 32000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
    ]
  }

  // private chart: any;

  constructor(
    private AmCharts: AmChartsService,

  ) {
  }

  ngOnInit(): void {
    // this.chart = this.AmCharts.makeChart("chartdiv", {
    //   "theme": "none",
    //   "type": "serial",
    //   "startDuration": 2,
    //   "dataProvider": [{"country": "USA", "visits": 4025, "color": "#FF0F00"}, {
    //     "country": "China",
    //     "visits": 1882,
    //     "color": "#FF6600"
    //   }, {"country": "Japan", "visits": 1809, "color": "#FF9E01"}, {
    //     "country": "Germany",
    //     "visits": 1322,
    //     "color": "#FCD202"
    //   }, {"country": "UK", "visits": 1122, "color": "#F8FF01"}, {
    //     "country": "France",
    //     "visits": 1114,
    //     "color": "#B0DE09"
    //   }],
    //   "valueAxes": [{"position": "left", "axisAlpha": 0, "gridAlpha": 0}],
    //   "graphs": [{
    //     "balloonText": "[[category]]: <b>[[value]]</b>",
    //     "colorField": "color",
    //     "fillAlphas": 0.85,
    //     "lineAlpha": 0.1,
    //     "type": "column",
    //     "topRadius": 1,
    //     "valueField": "visits"
    //   }],
    //   "depth3D": 60,
    //   "angle": 30,
    //   "chartCursor": {"categoryBalloonEnabled": false, "cursorAlpha": 0, "zoomable": false},
    //   "categoryField": "country",
    //   "categoryAxis": {"gridPosition": "start", "axisAlpha": 0, "gridAlpha": 0},
    //   "exportConfig": {
    //     "menuTop": "20px",
    //     "menuRight": "20px",
    //     "menuItems": [{"icon": '/lib/3/images/export.png', "format": 'png'}]
    //   }
    // }, 0);
  }
  gridApi: any
  gridColumnApi: any
  onGridReady(params: any) {
    console.log('onGridReady11111111')
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const updateData = (data: any) => {
      const dataSource = {
        rowCount: undefined,
        getRows: (params: any) => {
          console.log(111)
          // At this point in your code, you would call the server.
          // To make the demo look real, wait for 500ms before returning
          setTimeout(function () {
            // take a slice of the total 
            const { startRow,endRow } =params
            const rowsThisPage = data.slice(startRow,endRow)
            // const rowsThisPage = data.sstartRowlice(params.startRow, params.endRow);
            // if on or after the last page, work out the last row.
            let lastRow = -1;
            if (data.length <= endRow) {
              if (data.length < 100) {
                lastRow = data.length;

              }else{
                //当我们第一页滚动到头了，就让分页加1，并进行请求，这样我们就获取到了下一页数据，然后this.startRow=0，this.endRow=10也进行重置，这样就接着滑动，实现了滚动分页的效果
                // this.startRow=0
                // this.endRow=10
                // this.pagesize++
                // fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
                //  .then((data) => this.data=data);
                //  }
                // }
              }
            }
            
            // if (endRow < )
            // call the success callback
            params.successCallback(rowsThisPage, lastRow);
          }, 500);
        },
      };
      console.log(3,dataSource)
      params.api.setDatasource(dataSource);
    };

    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => {
        console.log('data')
        console.log('这是aggrid返回的内容')
        console.log(data)
        updateData(data)});
  }


  ngOnDestroy() {
    // this.AmCharts.destroyChart(this.chart);
  }

  hello() {

    // @ts-ignore
    this.agGridOptions.api.setRowData([
      {make: 'Toyota', model: 'Celica', price: 3500},
      {make: 'Ford', model: 'Mondeo', price: 32000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
      {make: 'Porsche', model: 'Boxter', price: 720000},
    ]);
    // this.chart = this.AmCharts.makeChart("chartdiv", {
    //   "theme": "none",
    //   "type": "serial",
    //   "startDuration": 2,
    //   "dataProvider": [{"country": "USA", "visits": 500, "color": "#FF0F00"}, {
    //     "country": "China",
    //     "visits": 1000,
    //     "color": "#FF6600"
    //   }, {"country": "Japan", "visits": 6000, "color": "#FF9E01"}, {
    //     "country": "Germany",
    //     "visits": 2000,
    //     "color": "#FCD202"
    //   }, {"country": "UK", "visits": 1122, "color": "#F8FF01"}, {
    //     "country": "France",
    //     "visits": 3000,
    //     "color": "#B0DE09"
    //   }],
    //   "valueAxes": [{"position": "left", "axisAlpha": 0, "gridAlpha": 0}],
    //   "graphs": [{
    //     "balloonText": "[[category]]: <b>[[value]]</b>",
    //     "colorField": "color",
    //     "fillAlphas": 0.85,
    //     "lineAlpha": 0.1,
    //     "type": "column",
    //     "topRadius": 1,
    //     "valueField": "visits"
    //   }],
    //   "depth3D": 60,
    //   "angle": 30,
    //   "chartCursor": {"categoryBalloonEnabled": false, "cursorAlpha": 0, "zoomable": false},
    //   "categoryField": "country",
    //   "categoryAxis": {"gridPosition": "start", "axisAlpha": 0, "gridAlpha": 0},
    //   "exportConfig": {
    //     "menuTop": "20px",
    //     "menuRight": "20px",
    //     "menuItems": [{"icon": '/lib/3/images/export.png', "format": 'png'}]
    //   }
    // }, 0);
  }
}
