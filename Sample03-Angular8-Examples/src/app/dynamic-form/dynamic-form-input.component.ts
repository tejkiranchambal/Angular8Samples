import {Component, Input} from '@angular/core';
import {InputBase1} from './InputBase1';
import {Form, FormGroup} from '@angular/forms';


@Component(
  {
    selector: 'app-input',
    templateUrl: './dynamic-form-input.component.html'
  })
export class DynamicFormInputComponent {

  @Input() input: InputBase1<string>;
  @Input() form: FormGroup;
}


