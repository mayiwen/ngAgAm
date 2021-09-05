import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.less']
})
export class ServeComponent implements OnInit {

  public data: number[] = []
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    // const url = 'http://localhost:8080/getuser'
    // this.http.get(url).subscribe (response =>{
    //   const res = response as number[]
    //   this.data = res
    //   console.log(this.data)
    // })
  }

}
