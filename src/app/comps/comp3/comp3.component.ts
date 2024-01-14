import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/DesignUtility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  userNameValue?: string;
  constructor(private _designUtilityService: DesignUtilityService) {
    _designUtilityService.userName.subscribe(res => {
      this.userNameValue = res;
    })
  }

  ngOnInit(): void {

  }

  changeValue(userName: any) {
    this._designUtilityService.userName.next(userName.value)
  }

}
