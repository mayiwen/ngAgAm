import {OnInit, ViewChild} from '@angular/core';
import { ViewChildSonComponent} from "../view-child-son/view-child-son.component";
import aaComponent from './a'
@aaComponent({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.less']
})
export class ViewChildComponent implements OnInit {
  @ViewChild('vcs') vcs: ViewChildSonComponent | undefined
  constructor() { }

  ngOnInit(): void {
  }
  showVcs() {
    // @ts-ignore
    this.vcs.hello()
    // @ts-ignore
    this.vcs.show = !this.vcs.show
  }

}
