import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {DataService} from './services/data.service';
import {PersonModule} from "./person/person.module";
/*import {TempDrivenComponent} from "./temp-driven/temp-driven.component";
import { PipesServicesComponent } from './pipes-services/pipes-services.component';*/

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PersonModule
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
