import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchPortalComponent} from './siblings/unrelated-comps/search-portal/search-portal.component';
import {SearchResultComponent} from './siblings/unrelated-comps/search-result/search-result.component';
import {TasksComponent} from './parent-child/parent-to-child/via-input/tasks/tasks.component';
import {ThaliComponent} from './parent-child/child-to-parent/thali/thali.component';
import {MoviesComponent} from './parent-child/parent-to-child/via-template/movies/movies.component';
import {MoviesViaViewChildrenComponent} from './parent-child/parent-to-child/via-viewchildren/movies-via-view-children/movies-via-view-children.component';
import { MessengerComponent } from './parent-child/parent-to-child/via-viewchild/messenger/messenger.component';
import { CompanyComponent } from './siblings/business/company/company.component';

const routes: Routes = [
  {
    path: 'searchPortal', component: SearchPortalComponent,
    children: [
      {path: 'searchResult', component: SearchResultComponent}
    ]
  },
  {path: 'tasks', component: TasksComponent},
  {path: 'thali', component: ThaliComponent},
  {path: 'movies-via-template-var', component: MoviesComponent},
  {path: 'messenger-via-view-child', component: MessengerComponent},
  {path: 'movies-via-view-children', component: MoviesViaViewChildrenComponent},
  {path: 'company', component: CompanyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentInteractionRoutingModule {
}

export const ciRoutingComponents = [
  SearchPortalComponent,
  SearchResultComponent,
  TasksComponent,
  ThaliComponent,
  MoviesComponent,
  MoviesViaViewChildrenComponent,
  MessengerComponent,
  CompanyComponent
];
