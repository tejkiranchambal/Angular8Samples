import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {DataService} from './services/data.service';
import {PersonModule} from './person/person.module';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {DynamicFormInputComponent} from './dynamic-form/dynamic-form-input.component';
import {DynamicFormModule} from './dynamic-form/dynamic-form.module';
import {InputControlService} from './services/input-control.service';
import {InputServices} from './services/input.service';
import { ShowDynamicComponent } from './show-dynamic/show-dynamic.component';
import { DynamicLoginComponent } from './dynamic-login/dynamic-login.component';
import {DynamicLoginService} from './services/dynamic-login.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ShowDynamicComponent,
    DynamicLoginComponent,
    DynamicLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PersonModule,
    DynamicFormModule,
    ReactiveFormsModule,
  ],
  providers: [
    DataService, InputControlService, InputServices, DynamicLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
