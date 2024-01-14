import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/DesignUtility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  constructor(private _designUtilityService: DesignUtilityService) { }
  obsSubscription1!: Subscription;
  obsSubscription2!: Subscription;
  bgColor?: string;

  //Example 01
  dataUser = ['John', 'Janavi', 'Rinkal', 'Tirth', 'Sagar', 'Niraj', 'Rutvik', 'Jinkal', 'Keyul', 'Priyanka', 'Mahendra']

  //Example 02
  color = ['Red', 'Green', 'Yellow', 'Blue', 'silver']

  ngOnInit(): void {

    const source = interval(1000);

    //Example 01
    this.obsSubscription1 = source.pipe(
      tap(res => {
        // console.log('Tap before map Ex 01' + res);
        if (res == this.dataUser.length) {
          this.obsSubscription1.unsubscribe();
        }
      }),
      map(
        res => this.dataUser[res]),
      // tap(res => console.log('Tap after map Ex 01 ------ ' + res))
    ).subscribe((res: any) => {
      this._designUtilityService.print(res, 'elContainer1');
    });

    //Example 02
    this.obsSubscription2 = source.pipe(
      tap(res => {
        this.bgColor = this.color[res];
        // console.log('Tap Ex 02 -' + res);
        if (res == this.color.length) {
          this.obsSubscription2.unsubscribe();
        }
      }),
      map(res => this.color[res])).subscribe((res: any) => {
        // this.bgColor = res;
        this._designUtilityService.print(res, 'elContainer2');
      });
  }
}
