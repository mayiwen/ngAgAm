import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from "ag-grid-angular";
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { ServeComponent } from './serve/serve.component';
import { HttpClientModule } from '@angular/common/http';
import { RxjsComponent } from './rxjs/rxjs.component'


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    TestComponent,
    Test1Component,
    ServeComponent,
    RxjsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([TestComponent, Test1Component]),
    AmChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
