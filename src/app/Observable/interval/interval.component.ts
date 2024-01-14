import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { DesignUtilityService } from 'src/app/services/DesignUtility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  obsMsg: string = '';
  videoSubscription !: Subscription;
  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit() {
    // interval call again and again based on time
    const broadCastVideos = interval(1000)
    // timer in first params as start after 5000 (delay) and 1000 (interval) is gap between seconds
    // const broadCastVideos = timer(5000,100)

    this.videoSubscription = broadCastVideos.subscribe((res: number) => {
      this.obsMsg = 'Video - ' + res;
      this._designUtilityService.print(this.obsMsg, 'elContainer1')
      this._designUtilityService.print(this.obsMsg, 'elContainer2')
      this._designUtilityService.print(this.obsMsg, 'elContainer3')

      if (res >= 25)
        this.videoSubscription.unsubscribe();
    });
  }
}
