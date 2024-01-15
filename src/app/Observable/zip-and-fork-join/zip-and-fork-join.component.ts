import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, map, take, zip } from 'rxjs';

@Component({
  selector: 'app-zip-and-fork-join',
  templateUrl: './zip-and-fork-join.component.html',
  styleUrls: ['./zip-and-fork-join.component.scss']
})
export class ZipAndForkJoinComponent implements OnInit, AfterViewInit {
  names = ['Tirth', 'Parth', 'Janavi', 'Hima', 'Jay', 'Anup', 'Anil']
  colors = ['red', 'green', 'blue', 'black', 'yellow']
  //Templates reference
  @ViewChild('name') name!: ElementRef;
  @ViewChild('color') color!: ElementRef;
  constructor() { }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    //Below both are Observable
    //For name element
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(
      map(event => event.target.value),
      take(4)
    );

    //For Color element
    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      map(event => event.target.value),
      take(3)
    );

    //Example 01 - Zip - Both value changed the zip will fire 
    zip(nameObs, colorObs).subscribe(([name, color]) => {
      this.createBox(name, color, 'elContainer1');
    });

    //Example 01 - ForkJoin - work with only last value , once forkjoin completed then after no div element created it's dependent on  take(4) and take(3) values
    forkJoin(nameObs, colorObs).subscribe(([name, color]) => {
      this.createBox(name, color, 'elContainer2');
    });
  }
  createBox(name: string, color: string, containerId: string) {
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute('class', color);
    document.getElementById(containerId)?.appendChild(el);
  }
}