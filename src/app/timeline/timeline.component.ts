import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimeLineService } from '../timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimeLineComponent implements OnInit, OnDestroy {
  postsList!: string[];

  isLoading: boolean = false;
  private postsListSubscription!: Subscription;

  constructor(private timeLineService: TimeLineService) {}

  ngOnInit(): void {
    this.postsListSubscription = this.timeLineService.postsListChanged.subscribe(posts => {
      this.postsList = posts;
      this.isLoading = false;
    });
    this.isLoading = true;
    this.timeLineService.fetchTimeLine();
  }

  ngOnDestroy(): void {
    this.postsListSubscription.unsubscribe();
  }


}
