import { Component, OnInit, Input } from '@angular/core';
import { Recommendation } from './recommendation.class';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  @Input() recommendation: Recommendation;

  constructor() { }

  ngOnInit() {
  }

}
