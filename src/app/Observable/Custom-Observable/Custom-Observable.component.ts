import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/DesignUtility.service';

@Component({
  selector: 'app-Custom-Observable',
  templateUrl: './Custom-Observable.component.html',
  styleUrls: ['./Custom-Observable.component.scss']
})
export class CustomObservableComponent implements OnInit, OnDestroy {

  constructor(private _designUtilityService: DesignUtilityService) { }
  techStatus!: string;
  techStatus2!: string;
  subscription!: Subscription;
  names?: string;
  nameStatus?: string;

  ngOnInit() {
    //Example 1 (Manually)
    const cusObs1 = Observable.create((obs: any) => {
      setTimeout(() => {
        obs.next('Angular');
      }, 2000);

      setTimeout(() => {
        obs.next('HTML');
      }, 4000);

      setTimeout(() => {
        obs.next('CSS / SCSS');
        // obs.complete('Data emit 3 complete');
      }, 6000);

      setTimeout(() => {
        obs.next('JavaScript');
        // obs.error(new Error('Limit exceeded'));
      }, 8000);

      setTimeout(() => {
        obs.next('jQuery');
        // obs.complete();
      }, 10000);
      // obs.error();
    });

    cusObs1.subscribe((res: any) => {
      // console.log(res);
      this._designUtilityService.print(res, 'elContainer1');
    }, (err: any) => {
      this.techStatus = 'error';
    }, (complete: any) => {
      this.techStatus = 'complete';
    });
    //subscribe(data, error, completion)

    //Example 2 (Custom Interval)
    const arr2 = ['Angular', 'Java', 'C#', 'JavaScript', 'jQuery']
    const cusObs2 = Observable.create((obs: any) => {
      let count = 0;
      setInterval(() => {
        obs.next(arr2[count++]);
        if (count >= 4) {
          obs.error('Error emitting');
        }

        if (count >= 5) {
          obs.complete();
        }
      }, 1000);
    });

    this.subscription = cusObs2.subscribe((res: any) => {
      this._designUtilityService.print(res, 'elContainer2');
    }, (err: any) => {
      this.techStatus2 = 'error';
    }, (complete: any) => {
      this.techStatus2 = 'complete';
    });

    //Example 3 (Random names)
    const arr3 = ['Anup', 'Shekhar', 'Sharma', 'John', 'Robot']
    const cusObs3 = Observable.create((obs: any) => {
      let count = 0;
      setInterval(() => {
        obs.next(arr3[count++]);
        if (count >= 3) {
          obs.error('Error emitting');
        }
        if (count >= 6) {
          obs.complete();
        }
      }, 1000);
    });

    cusObs3.subscribe((res: any) => {
      this.names = res;
    }, (err: any) => {
      this.nameStatus = 'error';
    }, (complete: any) => {
      this.nameStatus = 'complete';
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}