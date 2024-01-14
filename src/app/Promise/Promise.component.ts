import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Promise',
  templateUrl: './Promise.component.html',
  styleUrls: ['./Promise.component.scss'],
  preserveWhitespaces: true,
})
export class PromiseComponent implements OnInit {

  promiseVal: any;

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

  notAvailable = {
    brand: 'Not Available',
    status: 'Failed',
  }
  constructor() { }

  ngOnInit() {

    // let buyLaptop = new Promise(function (resolve, reject) {
    //   resolve('Promise is resolved')
    // }); or below code arrow function

    let buyLaptop = new Promise((resolve, reject) => {
      // Only one value will be returned resolved or reject
      // resolve('Promise is resolved')
      // reject('Promise is rejected')

      if (this.DellAvailable()) {
        setTimeout(() => {
          resolve(this.dell)
        }, 3000);
      } else if (this.HPAvailable()) {
        setTimeout(() => {
          resolve(this.hp)
        }, 3000);
      } else {
        setTimeout(() => {
          console.log(this.notAvailable);
          reject(this.notAvailable)
        }, 3000);
      }
    });

    buyLaptop.then(res => {
      // console.log('then code => ', res)
      this.promiseVal = res;
    }).catch(res => {
      // console.log('catch code => ', res)
      this.promiseVal = res;
    })

    this.getData();
  }

  DellAvailable() {
    return true;
  }

  HPAvailable() {
    return false;
  }


  promise: any = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('get data resolve')
    }, 3000);
  });

  async getData() {
    // let res = await this.promise;
    console.warn('await get data :: ' + await this.promise);
  }
}