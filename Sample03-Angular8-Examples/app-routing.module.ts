import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonListComponent} from "./person/person-list/person-list.component";
import {PersonDetailComponent} from "./person/person-detail/person-detail.component";
import {TempDrivenComponent} from "./temp-driven/temp-driven.component";
import {PipesServicesComponent} from "./pipes-services/pipes-services.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path:'PersonList', component: PersonListComponent },
    { path:'PersonDetail', component: PersonDetailComponent },
    { path:'TemplateDrivenForm', component: TempDrivenComponent },
    { path:'PipesServices', component: PipesServicesComponent }
    ]  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ TempDrivenComponent, PipesServicesComponent];
