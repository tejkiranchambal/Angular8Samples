import {Component, Input} from '@angular/core';
import {InputBase1} from './InputBase1';
import {Form, FormArray, FormControl, FormGroup} from '@angular/forms';


@Component(
  {
    selector: 'app-input',
    templateUrl: './dynamic-form-input.component.html'
  })
export class DynamicFormInputComponent {

  @Input() input: InputBase1<string>;
  @Input() form: FormGroup;

  /*changeSuit(e) {
    this.form.get(this.input.key).setValue(e.target.value, {
      onlySelf: true
    });
  }*/

  /*get inputValue() {
    if ( this.input.isArray ) {
      return this.arrayInput as FormControl;
    } else {
      return this.input as FormArray;
    }
  }*/

  get isValid() {
    return this.form.controls[this.input.key].valid;;
    /*this.form.controls[this.input.key].valid;*/
  }
}


