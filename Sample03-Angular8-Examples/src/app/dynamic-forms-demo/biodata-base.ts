import {AbstractControlOptions, ValidatorFn} from '@angular/forms';

export class BiodataBase<T> {
  value: T;
  key: string;
  label: string;
  controlType: string;
  type: string;
  options: {key: string, value: string}[];
  class: string;
  func: any;
  validations: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;

  constructor(controlOptions: {
                  value?: T,
                  key?: string,
                  label?: string,
                  controlType?: string,
                  type?: string,
                  class?: string,
                  func?: any,
                  validations?: ValidatorFn | ValidatorFn[] | AbstractControlOptions
                } = { }
              ) {
    this.value = controlOptions.value;
    this.key = controlOptions.key;
    this.label = controlOptions.label;
    this.controlType = controlOptions.controlType;
    this.type = controlOptions.type;
    this.class = controlOptions.class;
    this.func = controlOptions.func;
    this.validations = controlOptions.validations || null;
  }
}
