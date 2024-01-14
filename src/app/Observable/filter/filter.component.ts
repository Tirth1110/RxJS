import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  result1: any;
  result2: any;
  result3: any;
  dataUser = [
    { id: 1, name: 'John', gender: 'Male' },
    { id: 2, name: 'Janavi', gender: 'Female' },
    { id: 3, name: 'Rinkal', gender: 'Female' },
    { id: 4, name: 'Tirth', gender: 'Male' },
    { id: 5, name: 'Sagar', gender: 'Male' },
    { id: 6, name: 'Niraj', gender: 'Male' },
    { id: 7, name: 'Rutvik', gender: 'Male' },
    { id: 8, name: 'Jinkal', gender: 'Female' },
    { id: 9, name: 'Keyul', gender: 'Male' },
    { id: 10, name: 'Priyanka', gender: 'Female' },
    { id: 11, name: 'Mahendra', gender: 'Female' },
  ]
  constructor() { }

  ngOnInit(): void {

    // Example 1 Filter by length (Filter by name length > 6)
    from(this.dataUser)
      .pipe(filter(member => member.name.length > 6), toArray())
      .subscribe((res: any) => {
        this.result1 = res;
      });


    // Example 2 Filter by gender
    from(this.dataUser)
      .pipe(filter(member => member.gender == 'Female'), toArray())
      .subscribe((res: any) => {
        this.result2 = res;
      });


    // Example 3 Filter by nth Item
    from(this.dataUser)
      .pipe(filter(member => member.id <= 8), toArray())
      .subscribe((res: any) => {
        this.result3 = res;
      });
  }
}
