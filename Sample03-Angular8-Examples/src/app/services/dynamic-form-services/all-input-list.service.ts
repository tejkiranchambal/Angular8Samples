import {BiodataBase} from '../../dynamic-forms-demo/biodata-base';
import {FormInput} from '../../dynamic-forms-demo/form-elements/form-input';
import {FormSelect} from '../../dynamic-forms-demo/form-elements/form-select';
import {Injectable} from '@angular/core';
import { of } from 'rxjs';
import {FormButton} from '../../dynamic-forms-demo/form-elements/form-button';
import {Validators} from '@angular/forms';
import {forbiddenUtility} from '../../shared/user-name.validator';

@Injectable()
export class AllInputListService {
  constructor() { }

  getInput() {
    const inputControls: BiodataBase<string> [] = [
      new FormInput({
        key: 'name',
        label: 'Name',
        value: '',
        type: 'text',
        validations: [Validators.required, Validators.minLength(3), forbiddenUtility(/admin/)]
      }),
      new FormSelect({
        key: 'gender',
        label: 'Gender',
        options: [
          {key: 'F', value: 'Female'},
          {key: 'M', value: 'Male'},
          {key: 'O', value: 'Others'}
        ],
        type: 'dropdown',
        func: {
          name: 'myFunc',
          param: null
        },
        validations: [Validators.required]
      }),
      new FormSelect({
        key: 'mailCount',
        label: 'Select number of emails to add',
        options: [
          {key: 0, value: 0},
          {key: 1, value: 1},
          {key: 2, value: 2}
        ],
        type: 'dropdown',
        func: {
          name: 'mailCountChange',
          param: null
        },
        validations: [Validators.required]
      }),
      new FormInput({
        key: 'alternateEmails',
        label: 'Email',
        value: ['', ''],
        type: 'array',
        validations: [Validators.required, Validators.minLength(3), forbiddenUtility(/admin/)]
      }),
      new FormButton({
        key: 'btnSave',
        value: 'Save',
        type: 'submit ',
        class: 'btn btn-primary',
        func: {
          name: 'myFunc',
          param: null
        }
      }),
      new FormButton({
        key: 'btnReset',
        value: 'Reset',
        type: 'reset ',
        class: 'btn btn-secondary'
      })
    ];
    return of(inputControls);
  }
}
