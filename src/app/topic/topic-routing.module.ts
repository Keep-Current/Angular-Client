import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicComponent } from './topic.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicEditComponent } from './topic-edit/topic-edit.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { TopicCenterComponent } from './topic-center.component';

import { RecommendationComponent } from './recommendation/recommendation.component';
import { SavedDocumentsComponent } from './saved-documents/saved-documents.component';
import { DocumentComponent } from './document/document.component';

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
                                component: RecommendationComponent,
                                children: [
                                    { path: ':id', component: DocumentComponent },
                                    { path: '', component: RecommendationComponent }
                                ]
                            },
                            {
                                path: 'saved', component: SavedDocumentsComponent,
                                children: [
                                    { path: ':id', component: DocumentComponent },
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
