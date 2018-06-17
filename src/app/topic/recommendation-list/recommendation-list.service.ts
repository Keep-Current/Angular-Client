

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Recommendation } from '../recommendation/recommendation.class';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const RECOMMENDATIONS = [
  new Recommendation(1,
    'The Three Pillars of Machine-Based Programming',
    `In this position paper, we describe our vision of the future of machine-based programming
    through a categorical examination of three pillars of research. Those pillars are:
    (i) intention, (ii) invention, and(iii) adaptation. Intention emphasizes advancements
    in the human-to-computer and computer-to-machine-learning interfaces. Invention emphasizes
    the creation or refinement of algorithms or core hardware and software building blocks through
     machine learning (ML). Adaptation emphasizes advances in the use of ML-based constructs to
     autonomously evolve software.`,
    ['Justin Gottschlich', 'Armando Solar-Lezama', 'Nesime Tatbul', 'Michael Carbin',
      'Martin Rinard', 'Regina Barzilay', 'Saman Amarasinghe', 'Joshua B Tenenbaum', 'Tim Mattson'],
    'https://arxiv.org/pdf/1803.07244.pdf'),
  new Recommendation(2,
    'Style Transfer from Non-Parallel Text by Cross-Alignment',
    `This paper focuses on style transfer on the basis of non-parallel text. This is an instance of
      a broad family of problems including machine translation, decipherment, and sentiment
      modification. The key challenge is to separate the content from other aspects such as style.
      We assume a shared latent content distribution across different text corpora, and propose a
      method that leverages refined alignment of latent representations to perform style transfer.
      The transferred sentences from one style should match example sentences from the other style
      as a population. We demonstrate the effectiveness of this cross-alignment method on three tasks:
       sentiment modification, decipherment of word substitution ciphers, and recovery of word order.`,
    ['Tianxiao Shen', 'Tao Lei', 'Regina Barzilay', 'Tommi Jaakkola'],
    'https://arxiv.org/pdf/1705.09655.pdf')
];

@Injectable()
export class RecommendationListService {

  private similarDocsUrl = 'https://keepcurrentengine.herokuapp.com/find_similar';  // URL to web api

  private recommendations$: BehaviorSubject<Recommendation[]> =
   new BehaviorSubject<Recommendation[]>(RECOMMENDATIONS);

  constructor(private http: HttpClient) { }

  getRecommendations():Observable<Recommendation[]> {
    return this.http.get<Recommendation[]>(this.similarDocsUrl);
  }

  getRecommendation(recommendationId: number): Recommendation {
    return RECOMMENDATIONS[recommendationId];
  }

  // private log(message: string) {
  //   this.messageService.add('RecommendationListService: ' + message);
  // }

}
