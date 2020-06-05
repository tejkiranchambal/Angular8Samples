import {Injectable} from '@angular/core';

import {of} from 'rxjs';
import {InputBase1} from '../dynamic-form/InputBase1';
import {InputTextbox} from '../dynamic-form/input-textbox';

@Injectable()
export class DynamicLoginService {


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
