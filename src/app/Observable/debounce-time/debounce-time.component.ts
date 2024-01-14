import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {

  requestedData1!: string
  requestedData2!: string
  @ViewChild('myInput1') myInput1!: ElementRef;
  @ViewChild('myInput2') myInput2!: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

    //Example 01 - DebounceTime
    const searchTerm1 = fromEvent<any>(this.myInput1.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000)
    );

    searchTerm1.subscribe(res => {
      this.requestedData1 = res;
    });


    //Example 02 - DistinctUntilChanged
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    );

    searchTerm2.subscribe(res => {
      this.requestedData2 = res;
    });
  }
}