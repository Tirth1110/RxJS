import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/DesignUtility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    const sourceTech = interval(1000).pipe(
      map(v => 'Video Tech # ' + (v + 1)),
      take(5)
    );

    // sourceTech.subscribe((res) => {
    //   console.log(res);
    // });

    const sourceComedy = interval(1000).pipe(
      map(v => 'Video Comedy # ' + (v + 1)),
      take(3)
    );

    // sourceComedy.subscribe((res) => {
    //   console.log(res);
    // });


    const sourceNews = interval(1000).pipe(
      map(v => 'Video News # ' + (v + 1)),
      take(4)
    );

    // sourceNews.subscribe((res) => {
    //   console.log(res);
    // });

    const finalVideoList = concat(sourceTech, sourceComedy, sourceNews)
    finalVideoList.subscribe((res) => {
      this._designUtilityService.print(res.toString(), 'elContainer');
    });
  }
}
