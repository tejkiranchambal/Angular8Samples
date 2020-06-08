import {InputBase1} from '../dynamic-form/InputBase1';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';
import {forbiddenNameValidator} from '../shared/user-name.validator';
import {switchAll} from 'rxjs/operators';
import {emailDomainValidator} from '../shared/email-domain.validator';

@Injectable()
export class InputControlService {

  constructor() {
  }

  getFormGroup(inputBaseList: InputBase1<string>[]) {

    const group: any = {};

    /*  inputBaseList.forEach(
        inputBase => {
          group[inputBase.key] = (inputBase.isRequired) ? new FormControl(inputBase.value,
          ) :

        });*/

    inputBaseList.forEach(
      inputBase => {
        if (inputBase.isRequired) {
          switch (inputBase.controlType) {
            case 'textbox':
              switch (inputBase.type) {
                case 'text':
                  group[inputBase.key] = new FormControl(inputBase.value, Validators.required);
                  break;
                case 'email':
                  group[inputBase.key] = new FormControl(inputBase.value,
                    [emailDomainValidator,
                      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
                    ]);
                  break;
                case 'password':
                  group[inputBase.key] = new FormControl(inputBase.value,
                    [Validators.required, Validators.minLength(8), forbiddenNameValidator(/password/),
                      Validators.compose([
                        Validators.pattern(/\d/),
                        Validators.pattern(/[A-Z]/),
                        Validators.pattern(/[a-z]/),
                        Validators.pattern(/[.!@#$%^&*?]/)])]);
                  break;

              }
              break;
            case 'combobox':
              group[inputBase.key] = new FormControl(inputBase.value, Validators.required);
              break;

          }
        } else {
          group[inputBase.key] = new FormControl(inputBase.value, []);
        }
      }
    );
    return new FormGroup(group);
  }
}

