import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {

  url = 'https://my-json-server.typicode.com/uxtrendz/apis/videolist';
  allVideo!: Observable<any>;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    //In this video tutorial if we have filter some product like laptop mobile and tv using map filter then for all filters the API will call each time 
    //using ShareReplay we can avoid API calls and improve applications performance
    this.allVideo = this.http.get(this.url);
  }
}
