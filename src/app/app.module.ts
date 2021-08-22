import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from "ag-grid-angular";
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildSonComponent } from './view-child-son/view-child-son.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ViewChildComponent,
    ViewChildSonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    AmChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
