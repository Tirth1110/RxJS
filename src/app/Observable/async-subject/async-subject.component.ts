import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/DesignUtility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  asyncVideoEmit: any;
  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    this._designUtilityService.asyncVideoEmit.subscribe((res: any) => {
      this.asyncVideoEmit = res;
    });
  }

  onVideoAdd(video: any) {
    if (video) {
      this._designUtilityService.asyncVideoEmit.next(video);
    }
  }

  //onComplete Method
  onComplete() {
    //Once Observable is complete then data will be retrieved
    this._designUtilityService.asyncVideoEmit.complete();
  }
}
