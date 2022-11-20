import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeLineService {
  postsListChanged = new Subject<any[]>();
  posts!: any;

  constructor(private httpClient: HttpClient) { }

  fetchTimeLine() {
    this.httpClient.get<any>('https://techhub.social/api/v1/timelines/public').subscribe( response => {
      console.log(response);
    });
  }


}
