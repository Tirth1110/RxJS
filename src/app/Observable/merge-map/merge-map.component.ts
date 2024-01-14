import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/DesignUtility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    //Example 01 Map

    //Using single subscribe getting [object, Object]
    // source.pipe(map(res => this.getData(res))).subscribe((res: any) => {
    //   this._designUtilityService.print(res, 'elContainer1');
    // });

    source.pipe(map(res => this.getData(res))).subscribe(res => res.subscribe(res1 => {
      this._designUtilityService.print(res1, 'elContainer1');
    }));

    //Example 02 Map + MergeAll
    source.pipe(
      map(res => this.getData(res)),
      mergeAll()
    ).subscribe((res: any) => {
      this._designUtilityService.print(res, 'elContainer2')
    });

    //Example 03 MergeMap
    source.pipe(
      mergeMap(res => this.getData(res)),
    ).subscribe((res: any) => {
      this._designUtilityService.print(res, 'elContainer3')
    });
  }

  getData(data: string) {
    return of(data + ' Video uploaded');
  }
}