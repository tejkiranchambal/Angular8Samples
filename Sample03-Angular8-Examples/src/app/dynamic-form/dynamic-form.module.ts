import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicFormComponent} from './dynamic-form.component';
import {DynamicFormInputComponent} from './dynamic-form-input.component';
import {DataService} from '../services/data.service';
import {InputControlService} from '../services/input-control.service';
import {InputServices} from '../services/input.service';
import {ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {InputBase1} from './InputBase1';

@NgModule({
  declarations: [DynamicFormComponent, DynamicFormInputComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [DynamicFormComponent, DynamicFormInputComponent],
  providers: [
    InputControlService, InputServices
  ]
})
export class DynamicFormModule {


}
