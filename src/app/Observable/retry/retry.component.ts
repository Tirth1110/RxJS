import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  constructor(private http: HttpClient) { }

  classesList1: any[] = [];
  classesList2: any[] = [];
  isFetching1: boolean = false;
  isFetching2: boolean = false;
  status1: string = 'No data available';
  status2: string = 'No data available';

  ngOnInit(): void {
  }


  //Example 1 Retry
  fetchDetails1() {
    this.isFetching1 = true;
    this.status1 = 'Fetching data';

    //Retry how many times as no 4 so total request to server 5 times
    this.http.get('http://localhost:84/api/Classes/GetClassesDropdown')
      .pipe(retry(4))
      .subscribe({
        next: (res: any) => {
          this.classesList1 = res[0];
          setTimeout(() => {
            this.isFetching1 = false;
          }, 1000);
          this.status1 = 'Data fetched successfully'
        },
        error: (err: string) => {
          this.isFetching1 = false;
          console.log(err)
          this.status1 = 'Some thing error occurred'
        }
      });
  }
  retryClick() {
    this.fetchDetails1();
  }

  //Example 2 RetryWhen it's working continue so we can solve it by scan
  fetchDetails2() {
    this.isFetching2 = true;
    this.status2 = 'Fetching data';

    //Retry how many times as no 4 so total request to server 5 times
    this.http.get('http://localhost:84/api/Classes/GetClassesDropdown')
      .pipe(retryWhen(err => err.pipe(
        delay(3000),
        scan((retryCount: any) => {
          if (retryCount >= 5) {
            throw err;
          } else {
            retryCount++;
            this.status2 = 'Retry attempt #' + retryCount;
            return retryCount;
          }
        }, 0)
      )))
      .subscribe({
        next: (res: any) => {
          this.classesList2 = res[0];
          setTimeout(() => {
            this.isFetching2 = false;
          }, 1000);
          this.status2 = 'Data fetched successfully'
        },
        error: (err: string) => {
          this.isFetching1 = false;
          console.log(err)
          this.status2 = 'Some thing error occurred'
        }
      });
  }
  retryClick2() {
    this.fetchDetails2();
  }
}
