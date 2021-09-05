import { Component, OnInit } from '@angular/core';
import {IHeaderAngularComp} from "ag-grid-angular";
import { IAfterGuiAttachedParams, IHeaderParams } from 'ag-grid-community';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.less']
})
export class Test1Component implements OnInit, IHeaderAngularComp {
  data: any
  afterGuiAttached(params?: IAfterGuiAttachedParams): void {
    console.log('afterGuiAttached')
    console.log(params)
  }

  agInit(params: IHeaderParams): void {
    console.log('agInit')
    console.log(params)
    // @ts-ignore
    this.data = params.data
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
