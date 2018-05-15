import { TestBed, inject } from '@angular/core/testing';

import { RecommendationListService } from './recommendation-list.service';

describe('RecommendationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecommendationListService]
    });
  });

  it('should be created', inject([RecommendationListService], (service: RecommendationListService) => {
    expect(service).toBeTruthy();
  }));
});
