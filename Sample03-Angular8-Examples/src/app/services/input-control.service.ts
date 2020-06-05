import {InputBase1} from '../dynamic-form/InputBase1';
import {FormControl, FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';

@Injectable()
export class InputControlService {

  constructor() {
  }

  getFormGroup(inputBaseList: InputBase1<string>[]) {

    const group: any = {};

    inputBaseList.forEach(
      inputBase => {
        group[inputBase.key] = new FormControl(inputBase.value);
      });
    return new FormGroup(group);
  }
}

