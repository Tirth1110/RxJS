import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { ErrorService } from 'src/app/services/Error.service';

@Component({
  selector: 'app-catch-error-and-throw-error',
  templateUrl: './catch-error-and-throw-error.component.html',
  styleUrls: ['./catch-error-and-throw-error.component.scss']
})
export class CatchErrorAndThrowErrorComponent implements OnInit {

  constructor(private _http: HttpClient, private error: ErrorService) { }
  url: string = 'http://localhost:84/api/Admin/GetAll?pageNumber=1&pageSize=1';

  ngOnInit(): void {
    this._http.get(this.url).pipe(catchError(this.error.handleError)).subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }
}
