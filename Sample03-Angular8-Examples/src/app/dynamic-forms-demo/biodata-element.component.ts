import {Component, Input, OnInit} from '@angular/core';
import {BiodataBase} from './biodata-base';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emailValidator} from '../shared/email.validator';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-biodata-element',
  templateUrl: './biodata-element.component.html'
})
export class BiodataElementComponent implements OnInit {
  @Input() bio: BiodataBase<string>;
  @Input() biodataForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    /*this.mailCount.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(selectedValue => {
      const num = Number(selectedValue) || 0;
      let i = 0;
      console.log(selectedValue);
      for (i = 0; i < num; i++) {
        // this.addAlternateEmail();
        console.log('HII');
      }
    });*/
  }

  get isValid() {
    return this.biodataForm.controls[this.bio.key].valid;
  }

  myFunc() {
    alert(' From my func ' + JSON.stringify(this.biodataForm.getRawValue()));
  }

  mailCountChange(count) {
    this.removeAllAlternateEmails();
    for (let i = 0; i < count; i++) {
      this.addAlternateEmail();
    }
  }

  callAppropriateFunctions(func) {
    if (this[func.name]) {
      if (func.name === 'mailCountChange') {
        this[func.name](this.mailCount.value);
      } else {
        this[func.name]();
      }
    }
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control('',
      [emailValidator, Validators.email]));
  }

  removeAlternateEmail(index) {
    this.alternateEmails.removeAt(index);
  }

  removeAllAlternateEmails() {
    this.alternateEmails.clear();
  }

  get alternateEmails() {
    return this.biodataForm.get('alternateEmails') as FormArray;
  }

  get mailCount() {
    return this.biodataForm.get('mailCount');
  }
}
