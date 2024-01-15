import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, map, pluck, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-combine-latest-and-with-latest-from',
  templateUrl: './combine-latest-and-with-latest-from.component.html',
  styleUrls: ['./combine-latest-and-with-latest-from.component.scss']
})
export class CombineLatestAndWithLatestFromComponent implements OnInit, AfterViewChecked {

  names = ['Tirth', 'Parth', 'Janavi', 'Hima', 'Jay', 'Anup', 'Anil']
  colors = ['red', 'green', 'blue', 'black', 'yellow']


  //Templates reference
  @ViewChild('name') name!: ElementRef;
  @ViewChild('color') color!: ElementRef;
  constructor() { }
  ngAfterViewChecked(): void {

    //Below both are Observable
    //For name element
    const nameObs = fromEvent(this.name.nativeElement, 'change').pipe(map((event: any) => event.target.value));

    //For Color element
    const colorObs = fromEvent(this.color.nativeElement, 'change').pipe(map((event: any) => event.target.value));
    // const  = fromEvent(this.color.nativeElement, 'change').pipe(pluck('target', 'value'), map(value => value as string));

    //Example 1 CombineLatest 
    combineLatest([nameObs, colorObs]).subscribe(([name, color]) => {
      this.createBox(name, color, 'elContainer1');
    });

    //Example 2 WithLatestFrom
    //Master nameObs
    //Slave colorObs
    nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name, color]) => {
      this.createBox(name, color, 'elContainer2');
    });
  }

  ngOnInit(): void {
  }

  createBox(name: string, color: string, containerId: string) {
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute('class', color);
    document.getElementById(containerId)?.appendChild(el);
  }
}