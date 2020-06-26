import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonListComponent} from './person/person-list/person-list.component';
import {PersonDetailComponent} from './person/person-detail/person-detail.component';
import {TempDrivenComponent} from './temp-driven/temp-driven.component';
import {PipesServicesComponent} from './pipes-services/pipes-services.component';
import {ModelDrivenComponent} from './model-driven/model-driven.component';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomePageComponent },
    { path:'PersonList', component: PersonListComponent },
    { path:'PersonDetail', component: PersonDetailComponent },
    { path:'TemplateDrivenForm', component: TempDrivenComponent },
    { path:'PipesServices', component: PipesServicesComponent },
    { path:'ModelDrivenForm', component: ModelDrivenComponent }
    ]  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomePageComponent, TempDrivenComponent, PipesServicesComponent, ModelDrivenComponent];
