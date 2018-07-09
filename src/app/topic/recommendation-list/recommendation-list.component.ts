import { Component, OnInit } from '@angular/core';

import { RecommendationListService } from './recommendation-list.service';
import { Recommendation } from '../recommendation/recommendation.class';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-recommendation-list',
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.scss']
})
export class RecommendationListComponent implements OnInit {

  recommendations: Recommendation[];
  selectedId: number;

  constructor(
    private service: RecommendationListService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // const routeParmaPipe = pipe(
    //   switchMap((params: ParamMap) => {
    //     this.selectedId = +params.get('id');
    //     return this.service.getRecommendations();
    //   })
    // );

    // this.recommendations$ = routeParmaPipe(this.route.paramMap);
    this.getRecommendations();
  }

  getRecommendations(): void {
    this.service.getRecommendations()
    .subscribe(recommendations => this.recommendations = recommendations);
  }


}
