import {InputTextbox} from '../dynamic-form/input-textbox';
import {Injectable} from '@angular/core';
import {InputBase1} from '../dynamic-form/InputBase1';
import {of} from 'rxjs';
@Injectable()
export class InputServices {


  getRegistrationData() {
    const inputarr: InputBase1<string>[] = [
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
        key: 'Email',
        label: 'Email',
        value: '',
        type: 'email'
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
        type: 'password'
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
