import {InputBase1} from '../dynamic-form/InputBase1';
import {FormArray, FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {Injectable, OnInit} from '@angular/core';
import {forbiddenNameValidator} from '../shared/user-name.validator';
import {switchAll} from 'rxjs/operators';
import {emailDomainValidator} from '../shared/email-domain.validator';

@Injectable()
export class InputControlService {

  constructor(private fb: FormBuilder) {
  }

  myForm: FormGroup;

  getFormGroup(inputBaseList: InputBase1<string>[]) {
    const group: any = {};
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
                  if (inputBase.isArray) {
                    group[inputBase.key] = this.fb.array(inputBase.arrayValue);
                  } else {
                    group[inputBase.key] = new FormControl(inputBase.value, Validators.required);
                  }
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
    this.myForm = new FormGroup(group);
    if (this.myForm.get('title') != null) {
      this.myForm.get('title').statusChanges.subscribe(checkedValue => {
        for (let i = 0; i < this.myForm.get('title').value; i++) {
          this.addAlternateEmails();
        }
      });
    }

    return this.myForm;
  }

  addAlternateEmails() {
    (this.myForm.get('email') as FormArray).push(
      this.fb.control('', [emailDomainValidator, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]));
  }
}

