import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/DesignUtility.service';

@Component({
  selector: 'app-subject-and-behavior-subject',
  templateUrl: './subject-and-behavior-subject.component.html',
  styleUrls: ['./subject-and-behavior-subject.component.scss']
})
export class SubjectAndBehaviorSubjectComponent implements OnInit, OnDestroy {

  userName !: string;

  constructor(private _designUtilityService: DesignUtilityService) {
    _designUtilityService.userName.subscribe(res => {
      this.userName = res;
    })
  }

  ngOnInit(): void {
    //Example 1 Subject
    this._designUtilityService.exclusive.next(true);
  }

  ngOnDestroy(): void {
    //Example 1 Subject
    this._designUtilityService.exclusive.next(false);
  }
}