import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TopicComponent } from './topic.component';
import { TopicService } from './topic.service';
import { RecommendationListService } from './recommendation-list/recommendation-list.service';

import { TopicEditComponent } from './topic-edit/topic-edit.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { TopicCenterComponent } from './topic-center.component';

import { RecommendationComponent } from './recommendation/recommendation.component';
import { RecommendationListComponent } from './recommendation-list/recommendation-list.component';
import { SavedDocumentsComponent } from './saved-documents/saved-documents.component';


import { TopicRoutingModule } from './topic-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TopicRoutingModule,
  ],
  declarations: [
    TopicComponent,
    TopicEditComponent,
    TopicListComponent,
    TopicDetailComponent,
    RecommendationComponent,
    SavedDocumentsComponent,
    RecommendationListComponent,
    TopicCenterComponent
  ],
  providers: [TopicService, RecommendationListService]
})
export class TopicModule { }
