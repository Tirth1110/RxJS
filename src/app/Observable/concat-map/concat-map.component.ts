import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/DesignUtility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    //Example 01 | Map
    // source.pipe(map(res => this.getData(res))).subscribe((res: any) => {
    //   this._designUtilityService.print(res, 'elContainer1');
    // });

    source.pipe(map(res => this.getData(res))).subscribe(res => res.subscribe(res1 => {
      this._designUtilityService.print(res1, 'elContainer1');
    }));

    //Example 02 | Map + ConcatAll
    source.pipe(
      map(res => this.getData(res)),
      concatAll()
    ).subscribe(res => {
      this._designUtilityService.print(res, 'elContainer2');
    });

    //Example 03 | ConcatMap
    source.pipe(
      concatMap(res => this.getData(res))
    ).subscribe(res => {
      this._designUtilityService.print(res, 'elContainer3');
    });

    //Example 04 | MergeMap
    source.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe(res => {
      this._designUtilityService.print(res, 'elContainer4');
    });
  }
  getData(data: string) {
    return of(data + ' Video uploaded').pipe(delay(2000));
  }
}
