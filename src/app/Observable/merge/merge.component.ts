import { Component, OnInit } from '@angular/core';
import { interval, map, take, merge } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/DesignUtility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    const sourceTech = interval(2000).pipe(
      map(v => 'Video Tech # ' + (v + 1)),
      take(5 * 100)
    );

    // sourceTech.subscribe((res) => {
    //   console.log(res);
    // });

    const sourceComedy = interval(2000).pipe(
      map(v => 'Video Comedy # ' + (v + 1)),
      take(3 * 100)
    );

    // sourceComedy.subscribe((res) => {
    //   console.log(res);
    // });


    const sourceNews = interval(2000).pipe(
      map(v => 'Video News # ' + (v + 1)),
      take(4 * 100)
    );

    // sourceNews.subscribe((res) => {
    //   console.log(res);
    // });

    const finalVideoList = merge(sourceTech, sourceComedy, sourceNews)
    finalVideoList.subscribe((res) => {
      this._designUtilityService.print(res.toString(), 'elContainer');
    });
  }

}
