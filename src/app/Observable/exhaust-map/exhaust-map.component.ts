import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concatMap, exhaustMap, fromEvent, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/DesignUtility.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit, AfterViewInit {

  url = 'https://global-1bb0f.firebaseio.com/exhaustMap.json';
  counter: number = 0;
  @ViewChild('btnClick') btnClick!: ElementRef;
  saveRequest: number = 0;
  fetching: boolean = false;
  constructor(private _designUtilityService: DesignUtilityService, private http: HttpClient) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    fromEvent(this.btnClick.nativeElement, 'click')
      .pipe(
        exhaustMap(() => this.onSave(this.counter++)),
        tap(() => this.fetching = true),
        // concatMap(() => this.onSave(this.counter++))
      )
      .subscribe(res => {
        console.log(res);
        this.onFetch();
        this.fetching = false
      });
  }

  onSave(changes: any) {
    return this.http.put(this.url, { data: changes });
  }

  onFetch() {
    this.http.get(this.url).subscribe((res: any) => {
      this.saveRequest = res;
    });
  }
}