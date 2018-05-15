import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicComponent } from './topic.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicEditComponent } from './topic-edit/topic-edit.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { TopicCenterComponent } from './topic-center.component';

import { SavedDocumentsComponent } from './saved-documents/saved-documents.component';
import { RecommendationListComponent } from './recommendation-list/recommendation-list.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

const topicRoutes: Routes = [
    {
        path: 'topic',
        component: TopicComponent,
        children: [
            { path: 'edit', component: TopicEditComponent },
            {
                path: '',
                component: TopicListComponent,
                children: [
                    {
                        path: ':id',
                        component: TopicDetailComponent,
                        children: [
                            { path: 'edit', component: TopicEditComponent },
                            {
                                path: '',
                                component: RecommendationListComponent,
                                children: [
                                    { path: ':id', component: RecommendationComponent },
                                    { path: '', component: RecommendationListComponent }
                                ]
                            },
                            {
                                path: 'saved', component: SavedDocumentsComponent,
                                children: [
                                    { path: ':id', component: RecommendationListComponent },
                                    { path: '', component: SavedDocumentsComponent }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(topicRoutes)],
    exports: [RouterModule]
})
export class TopicRoutingModule { }
