import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await-promise',
  templateUrl: './async-await-promise.component.html',
  styleUrls: ['./async-await-promise.component.scss']
})
export class AsyncAwaitPromiseComponent implements OnInit {

  result1: string = "";
  result2: string = "";
  result3: string = "";

  buyLaptop: any;
  dell = {
    brand: 'Dell',
    hardDisk: '2TB',
    color: 'black'
  }

  hp = {
    brand: 'HP',
    hardDisk: '2TB',
    color: 'Sliver'
  }
  constructor() { }

  ngOnInit() {
    this.buyLaptop = new Promise((resolve, reject) => {
      resolve(this.dell);
    });
  }

  //Ex = 1 With Promise
  fetch1() {
    this.result1 = '';
    this.result1 = 'Fetching data ...';
    this.buyLaptop.then((res: any) => {
      this.result1 = res;
    })
  }

  //Ex = 2 With Async / Await
  async fetch2() {
    this.result2 = '';
    this.result2 = 'Fetching data ...';
    this.result2 = await this.buyLaptop
  }

  //Ex = 3 With Fetch API
  // fetch3() {
  //   this.result3 = 'Fetching data ...';
  //   let buyLaptop = fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json());
  //   buyLaptop.then((res: any) => {
  //     this.result3 = res;
  //   });
  // }

  async fetch3() {
    this.result3 = 'Fetching data ...';
    let buyLaptop = await fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json());
    this.result3 = buyLaptop;
  }
}
