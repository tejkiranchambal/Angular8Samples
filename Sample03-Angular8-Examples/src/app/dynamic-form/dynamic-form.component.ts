import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {InputBase1} from './InputBase1';
import {InputControlService} from '../services/input-control.service';

@Component(
  {
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [InputControlService]
  }
)
export class DynamicFormComponent implements OnInit {

  @Input() inputItems: InputBase1<string>[] = [];
  form: FormGroup;

  constructor(private ics: InputControlService) {

  }

  ngOnInit() {
    this.form = this.ics.getFormGroup(this.inputItems);
  }


}
