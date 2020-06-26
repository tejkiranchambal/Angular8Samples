import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentInteractionRoutingModule, ciRoutingComponents } from './component-interaction-routing.module';
import {SharedModule} from '../shared/shared.module';

// https://www.npmjs.com/package/angular-font-awesome
// http://www.techtutorhub.com/article/How-to-show-Font-Awesome-Icon-on-Angular-8-Application-using-angular-font-awesome-package/70
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { TaskDetailsComponent } from './parent-child/parent-to-child/via-input/task-details/task-details.component';
import { MovieDetailsComponent } from './parent-child/parent-to-child/via-template/movie-details/movie-details.component';
import { MovieDetailsViaViewChildrenComponent } from './parent-child/parent-to-child/via-viewchildren/movie-details-via-view-children/movie-details-via-view-children.component';
import { SamosaComponent } from './parent-child/child-to-parent/samosa/samosa.component';
import { ReceiverComponent } from './parent-child/parent-to-child/via-viewchild/receiver/receiver.component';
import {SearchPortalDataService} from '../services/ci-services/search-portal-data.service';
import { JaipurOutletComponent } from './siblings/business/jaipur-outlet/jaipur-outlet.component';
import { UdaipurOutletComponent } from './siblings/business/udaipur-outlet/udaipur-outlet.component';

@NgModule({
  declarations: [
    ciRoutingComponents,
    TaskDetailsComponent,
    MovieDetailsComponent,
    MovieDetailsViaViewChildrenComponent,
    SamosaComponent,
    ReceiverComponent,
    JaipurOutletComponent,
    UdaipurOutletComponent
  ],
  imports: [
    CommonModule,
    ComponentInteractionRoutingModule,
    AngularFontAwesomeModule,
    SharedModule.forRoot()
  ],
  exports: [
    ciRoutingComponents
  ],
  providers: [
    SearchPortalDataService
  ]
})
export class ComponentInteractionModule { }

// https://stackoverflow.com/a/51770232/8110771
