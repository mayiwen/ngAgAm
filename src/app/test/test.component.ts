import { Component, OnInit } from '@angular/core';
import {IHeaderAngularComp} from "ag-grid-angular";
import { IHeaderParams } from 'ag-grid-community';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements IHeaderAngularComp  {
  agInit(params: IHeaderParams): void {
    console.log('这是aginit')
    console.log(params)
  }

  refresh(params: IHeaderParams): boolean {
    console.log('refresh')
    console.log(params)
    return false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
