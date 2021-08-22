import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-son',
  templateUrl: './view-child-son.component.html',
  styleUrls: ['./view-child-son.component.less']
})
export class ViewChildSonComponent implements OnInit {
  public show: boolean = true
  constructor() { }

  ngOnInit(): void {
  }
  hello(): void {
    console.log('hello')
  }
}
