import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from '../Interface/seatch.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = 'https://my-json-server.typicode.com/uxtrendz/apis/videolist';
  constructor(private http: HttpClient) { }
  getSearch(searchTerm: string): Observable<Search> {
    return this.http.get<Search>(this.url + '?q=' + searchTerm);
  }
}
