import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  //you can't set default values on Subject
  exclusive = new Subject<boolean>();
  //you can set default values on Subject
  userName = new BehaviorSubject<string>('Tirth');

  //5000 means after added of data in 5 seconds not get the data
  videoEmit = new ReplaySubject<string>(3, 5000);

  //AsyncSubject 
  asyncVideoEmit = new AsyncSubject();
  constructor() { }

  print(value: string, containerId: any): void {
    let el = document.createElement('li');
    el.innerText = value;
    document.getElementById(containerId)?.appendChild(el);
  }

  print2(value: string, containerId: any): void {
    let el = document.createElement('div');
    el.innerText = value;
    document.getElementById(containerId)?.prepend(el);
  }
}