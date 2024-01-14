import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, map, mergeMap, of, switchAll, switchMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/DesignUtility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    //Example 01 | Map
    source.pipe(
      map(data => this.getData(data))
    ).subscribe((res: any) => {
      this._designUtilityService.print(res, 'elContainer1')
    });

    //Example 02 | Map + SwitchAll > Return only last data
    source.pipe(
      map(data => this.getData(data)),
      switchAll()
    ).subscribe((res) => {
      this._designUtilityService.print(res, 'elContainer2')
    });

    //Example 03 | SwitchMap
    source.pipe(
      switchMap(data => this.getData(data))
    ).subscribe((res) => {
      this._designUtilityService.print(res, 'elContainer3')
    });

    //Example 04 | MergeMap 
    source.pipe(
      mergeMap(data => this.getData(data))
    ).subscribe((res) => {
      this._designUtilityService.print(res, 'elContainer4')
    });

    //Example 05 | ConcatMap
    source.pipe(
      concatMap(data => this.getData(data)),
    ).subscribe((res) => {
      this._designUtilityService.print(res, 'elContainer5')
    });
  }
  getData(data: string) {
    return of(data + ' Video uploaded').pipe(delay(1000));
  }
}
