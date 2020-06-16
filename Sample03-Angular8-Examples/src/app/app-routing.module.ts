import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonListComponent} from './person/person-list/person-list.component';
import {PersonDetailComponent} from './person/person-detail/person-detail.component';
import {TempDrivenComponent} from './temp-driven/temp-driven.component';
import {PipesServicesComponent} from './pipes-services/pipes-services.component';
import {ModelDrivenComponent} from './model-driven/model-driven.component';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {ShowDynamicComponent} from './show-dynamic/show-dynamic.component';
import {DynamicLoginComponent} from './dynamic-login/dynamic-login.component';
import {BiodataFormMainComponent} from './dynamic-forms-demo/biodata-form-main.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path:'PersonList', component: PersonListComponent },
    { path:'PersonDetail', component: PersonDetailComponent },
    { path:'TemplateDrivenForm', component: TempDrivenComponent },
    { path:'PipesServices', component: PipesServicesComponent },
    {path: 'ModelDrivenForm', component: ModelDrivenComponent},
    {path: 'DynamicForm', component: ShowDynamicComponent},
    {path: 'DynamicLogin', component: DynamicLoginComponent},
    { path: 'dynamicFormWithEvent', component: BiodataFormMainComponent }
    ]  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ TempDrivenComponent, PipesServicesComponent, ModelDrivenComponent, BiodataFormMainComponent];
