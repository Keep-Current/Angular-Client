import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Recommendation } from '../recommendation/recommendation.class';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RecommendationListService {

  private similarDocsUrl = 'https://keepcurrentengine.herokuapp.com/find_similar'; // URL to web api
  private recommendations$: Recommendation[];
  // private recommendations$: BehaviorSubject<Recommendation[]> =
  // new BehaviorSubject<Recommendation[]>(RECOMMENDATIONS);

  constructor(
    private http: HttpClient
  ) { }

  getRecommendations(): Observable<Recommendation[]> {
    return this.http.get<Recommendation[]>(this.similarDocsUrl);
  }


  getRecommendation(recommendationId: number): Recommendation {
    return null; // RECOMMENDATIONS[recommendationId];
  }

}
