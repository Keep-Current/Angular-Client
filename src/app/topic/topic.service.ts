import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class Topic {
  constructor(
    public id: number,
    public name: string,
    public urls?: Array<string>) { }
}

const TOPICS = [
  new Topic(1, 'Topic #1'),
  new Topic(2, 'Topic #2'),
];

import { Injectable } from '@angular/core';

@Injectable()
export class TopicService {
  static nextTopicId = 100;
  private topics$: BehaviorSubject<Topic[]> = new BehaviorSubject<Topic[]>(TOPICS);

  getTopics() { return this.topics$; }

  getTopic(id: number | string) {
    return this.getTopics()
      .map(topics => topics.find(topic => topic.id === +id));
  }

  addTopic(name: string) {
    name = name.trim();
    if (name) {
      const topic = new Topic(TopicService.nextTopicId++, name);
      TOPICS.push(topic);
      this.topics$.next(TOPICS);
    }
  }
}
