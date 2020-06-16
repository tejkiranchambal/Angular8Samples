import {Injectable} from '@angular/core';
import {BiodataBase} from '../../dynamic-forms-demo/biodata-base';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {emailValidator} from '../../shared/email.validator';

@Injectable({
  providedIn: 'root'
})
export class InputBaseToControlService {
  constructor() { }

  toFormGroup(inputs: BiodataBase<string>[] ): FormGroup {
    const group: any = {};

    inputs.forEach(control => {
      if (control.type === 'array') {
        group[control.key] = new FormArray([]);
      } else {
        if (control.validations) {
          group[control.key] = new FormControl(control.value || '', control.validations);
        } else {
          group[control.key] = new FormControl(control.value || '');
        }
      }
    });
    const form = new FormGroup(group);
    if (form.get('mailCount') !== undefined) {
       form.get('mailCount').valueChanges.subscribe(selectedValue => {
         const num = Number(selectedValue) || 0;
         let i = 0;
         console.log(selectedValue);
         for (i = 0; i < num; i++) {
           // this.addAlternateEmail(form);
           console.log('HII');
         }
       });
     }
    return form;
  }

  /*addAlternateEmail(form: FormGroup) {
    let altemails = form.get('alternateEmails') as FormArray;
    altemails.push()
    altemails.push(this.fb.control('',
      [emailValidator, Validators.email]));
  }*/
}
