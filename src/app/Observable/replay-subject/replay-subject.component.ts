import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/DesignUtility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  constructor(private _designUtilityService: DesignUtilityService) { }

  //List data
  user1List = ['HTML 1', 'HTML 2']
  user2List: any[] = [];
  user3List: any[] = [];

  //Subscribe modes
  subscribeToModes2: boolean = false;
  subscribeToModes3: boolean = false;

  //Subscriptions
  subscriptions2 !: Subscription;
  subscriptions3 !: Subscription;

  //Toggle properties
  methodInterval: boolean = false;
  subscriptionsInterval !: Subscription;

  ngOnInit(): void {
    this._designUtilityService.videoEmit.subscribe((res: any) => {
      this.user1List.push(res);
    });
  }

  onVideoAdd(video: any) {
    if (video) {
      this._designUtilityService.videoEmit.next(video);
    }
  }

  //User 2 Subscribe Buttons
  user2Subscribe() {
    if (this.subscribeToModes2) {
      this.subscriptions2.unsubscribe();
    } else {
      this.subscriptions2 = this._designUtilityService.videoEmit.subscribe((res: any) => {
        this.user2List.push(res);
      });
    }
    this.subscribeToModes2 = !this.subscribeToModes2;
  }

  //User 3 Subscribe Buttons
  user3Subscribe() {
    if (this.subscribeToModes3) {
      this.subscriptions3.unsubscribe();
    } else {
      this.subscriptions3 = this._designUtilityService.videoEmit.subscribe((res: any) => {
        this.user3List.push(res);
      });
    }
    this.subscribeToModes3 = !this.subscribeToModes3;
  }

  toggleClick() {
    if (!this.methodInterval) {
      const broadCastVideo = interval(1000);
      this.subscriptionsInterval = broadCastVideo.subscribe((res: any) => {
        this._designUtilityService.videoEmit.next('Video ' + res);
      });
    } else {
      this.subscriptionsInterval.unsubscribe();
    }
    this.methodInterval = !this.methodInterval
  }
}
