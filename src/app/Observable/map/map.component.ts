import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/DesignUtility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  subscription1!: Subscription;
  subscription2!: Subscription;
  messages1 !: string;
  messages2 !: string;

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit() {
    const broadCastVideos = interval(1000);
    //Example 1
    //Data transformations using pipe()
    this.subscription1 = broadCastVideos.pipe(
      map(data => 'Video - : ' + data)).subscribe((res: any) => {
        this.messages1 = res;
      });

    setTimeout(() => {
      this.subscription1.unsubscribe();
    }, 10000);

    //Example 2
    this.subscription2 = broadCastVideos
      .pipe(map(data => data * 2000))
      .subscribe((res: any) => {
        // console.log(res);
        this.messages2 = res;
      });
    setTimeout(() => {
      this.subscription2.unsubscribe();
    }, 10000);

    //Example 3
    const members = from([
      { id: 1, name: 'Tirth', age: 25 },
      { id: 2, name: 'Jash', age: 23 },
      { id: 3, name: 'Kartik', age: 22 }
    ]);

    members.pipe(map(data => data?.name))
      .subscribe((res: any) => {
        this.designUtilityService.print(res, 'elContainer')
      });
  }
}