import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Topic, TopicService } from '../topic.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  topics$: Observable<Topic[]>;
  selectedId: number;

  constructor(
    private service: TopicService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.topics$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.service.getTopics();
      });
  }

}
