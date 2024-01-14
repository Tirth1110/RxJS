import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/DesignUtility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  exclusive: boolean = false;
  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit() {
    this._designUtilityService.exclusive.subscribe((res) => {
      this.exclusive = res;
    });
  }
}
