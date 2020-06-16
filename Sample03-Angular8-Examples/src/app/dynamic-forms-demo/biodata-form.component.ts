import {Component, Input, OnInit} from '@angular/core';
import {InputBaseToControlService} from '../services/dynamic-form-services/input-base-to-control.service';
import {BiodataBase} from './biodata-base';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-biodata-form',
  templateUrl: './biodata-form.component.html',
  providers: [InputBaseToControlService]
})
export class BiodataFormComponent implements OnInit {
  @Input() bioInputs: BiodataBase<string>[] = [];
  bioForm: FormGroup;

  constructor(private ics: InputBaseToControlService) { }

  ngOnInit(): void {
    this.bioForm = this.ics.toFormGroup(this.bioInputs);
  }

  /*onSubmit() {
    alert(' From on submit ' + JSON.stringify(this.bioForm.getRawValue()));
  }*/

/*  myFunc() {
    alert(' From my func ' + JSON.stringify(this.bioForm.getRawValue()));
  }

  mailCountChange() {
    alert('Email combo called!');
  }*/
}
