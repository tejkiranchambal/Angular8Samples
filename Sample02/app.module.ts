import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataService} from './data.service';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonListComponent } from './person-list/person-list.component';
import { CustomPipePipe } from './custom-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PersonDetailComponent,
    PersonListComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataService,
    CustomPipePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
