import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { slideInDownAnimation } from '../../animations';
import { Topic } from '../topic.service';

@Component({
  selector: 'app-topic-edit',
  templateUrl: './topic-edit.component.html',
  styleUrls: ['./topic-edit.component.scss'],
  animations: [slideInDownAnimation]
})
export class TopicEditComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  topic: Topic;
  topicName: string;
  exampleURL1: string;
  exampleURL2: string;
  exampleURL3: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { topic: Topic }) => {
        if (data.topic) {
          this.topicName = data.topic.name;
          this.topic = data.topic;
        }
      });
  }

  cancel() {
    this.gotoTopics();
  }

  save() {
    this.topic.name = this.topicName;
    this.gotoTopics();
  }

  gotoTopics() {
    const topicId = this.topic ? this.topic.id : null;
    if (topicId) {
      this.router.navigate(['../', { id: topicId }], { relativeTo: this.route });
    } else {
      this.router.navigate(['/topic']);
    }
  }

}
