import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonDetailComponent} from "./person-detail/person-detail.component";
import {PersonListComponent} from "./person-list/person-list.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    PersonDetailComponent,
    PersonListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot()
  ],
  exports:[
    PersonListComponent,
    PersonDetailComponent
  ]
})
export class PersonModule { }
