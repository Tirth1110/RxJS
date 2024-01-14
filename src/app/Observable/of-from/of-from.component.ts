import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { resolve } from 'path';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/DesignUtility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor(private _designUtilityService: DesignUtilityService) { }
  obsMsg: any;

  ngOnInit() {
    //OF Example 1
    const obs1 = of('Anup', 'Shekhar', 'Sharma')
    obs1.subscribe((res: string) => {
      this._designUtilityService.print(res, 'elContainer1');
    });

    //OF Example 2
    const obs2 = of({ a: 'Anup', b: 'Shekhar', c: 'Sharma' })
    obs2.subscribe((res: any) => {
      this.obsMsg = res;
      // this._designUtilityService.print(res, 'elContainer2');

    });


    //From - Array Example 1
    const obs3 = from(['Tirth', 'Keval', 'Kartik'])
    obs3.subscribe((res: string) => {
      this._designUtilityService.print(res, 'elContainer3');
    });

    //From - Promise Example 2
    const promise = new Promise(resolve => {
      setTimeout(() => {
        // resolve('Promise Resolved');
        resolve(['Tirth', 'Keval', 'Kartik']);
      }, 2000);
    })
    // promise.then((res: any) => {
    //   console.log(res);
    // });

    //now convert to observable
    const obs4 = from(promise)
    obs4.subscribe((res: any) => {
      this._designUtilityService.print(res, 'elContainer4');
    });

    //From - String Example 3
    const obs5 = from('Welcome to India')
    obs5.subscribe((res: string) => {
      this._designUtilityService.print(res, 'elContainer5');
    });
  }
}
