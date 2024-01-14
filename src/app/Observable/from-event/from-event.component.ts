import { DesignUtilityService } from './../../services/DesignUtility.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addButton') addButton!: ElementRef;
  constructor(private _designUtilityService : DesignUtilityService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addButton.nativeElement, 'click').subscribe((res: any) => {
      let countVal = 'Video ' + count++;
      this._designUtilityService.print(countVal,'elContainer');
      this._designUtilityService.print(countVal,'elContainer2');
    });
  }
}