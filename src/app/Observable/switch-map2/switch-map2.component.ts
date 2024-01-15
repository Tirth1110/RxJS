import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, filter, pluck, switchMap } from 'rxjs';
import { Search } from 'src/app/Interface/seatch.interface';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-switch-map2',
  templateUrl: './switch-map2.component.html',
  styleUrls: ['./switch-map2.component.scss']
})
export class SwitchMap2Component implements AfterViewInit {

  @ViewChild('searchForm') searchForm!: NgForm;
  searchResult: any;
  constructor(private _searchService: SearchService) { }


  ngAfterViewInit(): void {
    const formValue = this.searchForm.valueChanges;
    formValue?.pipe(
      filter(() => !!this.searchForm.valid),
      pluck('searchTerm'),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(data => this._searchService.getSearch(data))
    ).subscribe((res: Search) => {
      this.searchResult = [res];
      this.searchResult = this.searchResult[0]
      console.log(this.searchResult);
    });
  }
}
