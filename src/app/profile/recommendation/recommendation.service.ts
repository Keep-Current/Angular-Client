import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

export class Document {
  constructor(public id: number, public title: string, public content: string) { }
}

const DOCUMENTS = [
  new Document(1,
    'The Three Pillars of Machine-Based Programming',
    `In this position paper, we describe our vision of the future of machine-based programming
    through a categorical examination of three pillars of research. Those pillars are:
    (i) intention, (ii) invention, and(iii) adaptation. Intention emphasizes advancements
    in the human-to-computer and computer-to-machine-learning interfaces. Invention emphasizes
    the creation or refinement of algorithms or core hardware and software building blocks through
     machine learning (ML). Adaptation emphasizes advances in the use of ML-based constructs to
     autonomously evolve software.`),
  new Document(1,
    'Style Transfer from Non-Parallel Text by Cross-Alignment',
    `This paper focuses on style transfer on the basis of non-parallel text. This is an instance of
      a broad family of problems including machine translation, decipherment, and sentiment
      modification. The key challenge is to separate the content from other aspects such as style.
      We assume a shared latent content distribution across different text corpora, and propose a
      method that leverages refined alignment of latent representations to perform style transfer.
      The transferred sentences from one style should match example sentences from the other style
      as a population. We demonstrate the effectiveness of this cross-alignment method on three tasks:
       sentiment modification, decipherment of word substitution ciphers, and recovery of word order.`)
];

@Injectable()
export class RecommendationService {

  constructor() { }

}
