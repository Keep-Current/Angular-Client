
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Topic, TopicService } from '../topic.service';

import { Observable, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
    const routeParmaPipe = pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.service.getTopics();
      })
    );

    this.topics$ = routeParmaPipe(this.route.paramMap);
  }

}
