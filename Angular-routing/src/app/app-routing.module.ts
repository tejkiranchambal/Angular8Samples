import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentListComponent} from './department-list/department-list.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {PageNotFoundComponent} from './page-not-fount/page-not-found.component';
import {DepartmentDetailComponent} from './department-detail/department-detail.component';
import {DepartmentOverviewComponent} from './department-overview/department-overview.component';
import {DepartmentContactComponent} from './department-contact/department-contact.component';

const routes: Routes = [
  {path : '', redirectTo: '/departments', pathMatch: 'full'},
  {
    path : 'department/:id', component: DepartmentDetailComponent,
    children: [
      {path: 'overview', component: DepartmentOverviewComponent },
      {path : 'contact', component: DepartmentContactComponent}
    ]
  },
  {path: 'departments', component: DepartmentListComponent},
  {path: 'employees', component: EmployeeListComponent, data : [
      {id: 201, name: 'john', age: 22, gender: 'male'},
      {id: 202, name: 'janny', age: 22, gender: 'Female'},
      {id: 203, name: 'sia', age: 22, gender: 'Female'},
      {id: 204, name: 'jordan', age: 22, gender: 'Male'},
      {id: 205, name: 'mary', age: 22, gender: 'Female'},
      {id: 206, name: 'tia', age: 22, gender: 'Female'},
      {id: 205, name: 'harry', age: 22, gender: 'Male'},
      {id: 206, name: 'porter', age: 22, gender: 'Male'}
    ]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, EmployeeListComponent, PageNotFoundComponent, DepartmentDetailComponent, DepartmentOverviewComponent , DepartmentContactComponent ];
