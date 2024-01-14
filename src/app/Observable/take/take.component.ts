import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/DesignUtility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  randomName = ['Anup', 'Tirth', 'Jay', 'Kajal', 'Jalan', 'Keyur']
  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {

    let nameSource = from(this.randomName);

    //Example 01
    //if we are use take(5) then it's automatically unsubscribe
    nameSource.pipe(take(5))
      .subscribe((res: any) => {
        this._designUtilityService.print(res, 'elContainer1')
      });

    //Example 02
    //Take only last 3 elements
    nameSource.pipe(takeLast(3))
      .subscribe((res: any) => {
        this._designUtilityService.print(res, 'elContainer2')
      });


    //Example 03 
    //condition1 will apply after 6 seconds
    //condition2 will apply when click is clicked on document anywhere
    const source = interval(1000);
    let condition1 = timer(6000);
    let condition2 = fromEvent(document, 'click');

    source.pipe(
      map(res => 'Number ' + res),
      takeUntil(condition2)
    ).subscribe((res) => {
      this._designUtilityService.print(res, 'elContainer3')
    });
  }
}
