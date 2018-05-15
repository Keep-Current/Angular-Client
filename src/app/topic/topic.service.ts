

import { BehaviorSubject, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

export class Topic {
  constructor(
    public name: string,
    public urls?: Array<string>,
    public id: number = -1) { }
}

// ToDo: retrieve it from the DB
const TOPICS = [
  new Topic('Natural Language Processing - Chat Bots', [], 1)
];

import { Injectable } from '@angular/core';

@Injectable()
export class TopicService {
  static nextTopicId = 100;
  private topics$: BehaviorSubject<Topic[]> = new BehaviorSubject<Topic[]>(TOPICS);

  getTopics() { return this.topics$; }

  getTopic(id: number | string) {
    const filterPipe = pipe(
      map((topics: Array<Topic>) => topics.find(topic => topic.id === +id))
    );
    const topicList = this.getTopics();
    return filterPipe(topicList);
  }

  addTopic(name: string, urls?: Array<string>): Topic {
    name = name.trim();
    if (name) {
      const topic = new Topic(name, urls, TopicService.nextTopicId++);
      TOPICS.push(topic);
      this.topics$.next(TOPICS);
      return topic;
    }
    return null;
  }
}
