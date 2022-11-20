import { TestBed } from '@angular/core/testing';

import { TimeLineService } from './timeline.service';

describe('TimelineService', () => {
  let service: TimeLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
