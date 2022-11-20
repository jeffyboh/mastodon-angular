import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeLineService {
  postsListChanged = new Subject<any[]>();
  posts!: any;

  constructor(private httpClient: HttpClient) { }

  fetchTimeLine() {
    this.httpClient.get<any>('https://techhub.social/api/v1/timelines/public')
    .pipe(map(respData => {
      return respData;
    }))
    .subscribe( respData => {
      this.postsListChanged.next(respData)
      console.log(respData);
    });
  }


}
