import { Component, OnInit } from '@angular/core';
import { from, Observable, interval, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {HttpClient} from "@angular/common/http";
import { of, pipe } from 'rxjs';
import { map, retry, filter, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.less']
})
export class RxjsComponent implements OnInit {

  // private data: number[] = []
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.test09()
  }
  test10() {
    let stopwatchValue = 0;
    let stopwatchValue$!: Observable<number>;


    stopwatchValue$.subscribe(num =>
      stopwatchValue = num
    );

  }
  test09() {
    const apiData = ajax('http://localhost:8080/getuser1').pipe(
      map((res: any) => {
        if (!res.response) {
          console.log('Error occurred.');
          throw new Error('Value expected!');
        }
        return res.response;
      }),
      retry(3), // Retry up to 3 times before failing
      catchError(() => of([]))
    );

    apiData.subscribe({
      next(x: any) { console.log('data: ', x); },
      error() { console.log('errors already caught... will not run'); }
    });
  }

  test08() {

// Return "response" from the API. If an error happens,
// return an empty array.
    // @ts-ignore
    const apiData = ajax('http://localhost:8080/getuser').pipe(
      map((res: any) => {
        if (!res.response) {
          throw new Error('Value expected!');
        }
        return res.response;
      }),
      // @ts-ignore
      catchError(() => {
          console.log('访问异常')
          of([])
        }
      )
    );

    apiData.subscribe({
      next(x: any) { console.log('data: ', x); },
      error() {
        console.log('errors already caught... will not run');
      }
    });
  }

  test07() {
    // 一个高端的进阶的测试
    const squareOdd  = of(1, 2, 3, 4, 5).pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );
    squareOdd.subscribe(x => console.log(x));
  }
  test06() {
    // 一个高端的进阶的测试
    const nums = of(1, 2, 3, 4, 5);

// Create a function that accepts an Observable.
    const squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );

// Create an Observable that will run the filter and map functions
    const squareOdd = squareOddVals(nums);

// Subscribe to run the combined functions
    squareOdd.subscribe(x => console.log(x));
  }
  test05() {

    const nums = of(1, 2, 3);

    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(nums);

    squaredNums.subscribe(x => console.log(x));
  }
  test04() {
    // Create an Observable that will create an AJAX request
    const apiData = ajax('http://localhost:8080/getuser');
    // Subscribe to create the request

    // @ts-ignore
    apiData.subscribe(res => console.log(res));
  }
  /**
   * 给一个元素绑定鼠标事件
   */
  test03() {
    const el = document.getElementById('my-element')!;
    // Create an Observable that will publish mouse movements
    const mouseMoves = fromEvent<MouseEvent>(el, 'mousemove');

    // Subscribe to start listening for mouse-move events
    const subscription = mouseMoves.subscribe(evt => {
      // Log coords of mouse movements
      console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements
      if (evt.clientX < 40 && evt.clientY < 40) {
        // 取消了绑定的事件
        subscription.unsubscribe();
      }
    });
  }
  test02() {
    // 一个持续运行的
    // Create an Observable that will publish a value on an interval
    const secondsCounter = interval(1000);
    // Subscribe to begin publishing values
    const subscription = secondsCounter.subscribe(n =>
      console.log(`It's been ${n + 1} seconds since subscribing!`)
    );
  }
  test01() {
    const data = from(fetch('http://localhost:8080/getuser'));
    console.log('这是打印的内容')
    // console.log(data)
    data.subscribe({
      next(response) {
        // 访问正常会坐这个
        console.log(response);
      },
      error(err) {
        // 路径写错会走这个
        console.error('Error: ' + err);
      },
      complete() {
        // 走正常会走这个
        console.log('Completed');
      }
    });
  }
}
