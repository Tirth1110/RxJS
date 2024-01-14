import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/DesignUtility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

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
