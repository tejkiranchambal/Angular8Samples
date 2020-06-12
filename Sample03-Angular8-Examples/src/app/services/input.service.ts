import {InputTextbox} from '../dynamic-form/input-textbox';
import {Injectable} from '@angular/core';
import {InputBase1} from '../dynamic-form/InputBase1';
import {of} from 'rxjs';
import {InputCombobox} from '../dynamic-form/input-combobox';

@Injectable()
export class InputServices {


  getRegistrationData() {
    const inputarr: InputBase1<string>[] = [
      new InputCombobox({
        key: 'title',
        label: 'Title',
        show: true,
        value: '',
        callbackMethod: 'addAlternateEmails()',
        options: [
          {key: '0', value: '--'},
          {key: '1', value: 'One'},
          {key: '2', value: 'Two'},
          {key: '3', value: 'Three'},
          {key: '4', value: 'Four'},
          {key: '5', value: 'Five'},
          {key: '6', value: 'Six'},
          {key: '7', value: 'Seven'},
          {key: '8', value: 'Eight'},
          {key: '9', value: 'Nine'},
          {key: '10', value: '10'},

        ]

      }),
      new InputTextbox({
        key: 'firstName',
        label: 'First Name',
        value: 'Tej Kiran'
      }),
      new InputTextbox({
        key: 'lastName',
        label: 'Last Name',
        value: 'Sharma',
        type: 'text'
      }),
      new InputTextbox({
        key: 'email',
        label: 'Email',
        value: '',
        type: 'email',
        isRequired: true,
        isArray: true,
        arrayValue: ['','','']
      }),
      new InputTextbox({
        key: 'phone',
        label: 'Phone Number1',
        value: '',
        type: 'number'
      }),
      new InputTextbox({
        key: 'address',
        label: 'Home Address',
        value: '',
        type: 'text'
      }),
      new InputTextbox({
        key: 'username',
        label: 'UserName',
        value: '',
        type: 'text'
      }),

      new InputTextbox({
        key: 'Password',
        label: 'Password',
        value: '',
        type: 'password',
        isRequired: true
      })
    ];

    return of(inputarr);
  }

  getLoginData() {
    const inputarr: InputBase1<string>[] = [

      new InputTextbox({
        key: 'username',
        label: 'User Name',
        value: '',
        type: 'text'
      }),
      new InputTextbox({
        key: 'Password',
        label: 'Password',
        value: '',
        type: 'password'
      })
    ];
    return of(inputarr);
  }


}
