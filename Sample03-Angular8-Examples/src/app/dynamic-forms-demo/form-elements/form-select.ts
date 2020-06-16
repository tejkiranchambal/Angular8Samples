import {BiodataBase} from '../biodata-base';

export class FormSelect extends BiodataBase<string> {
  controlType = 'dropdown';
  options: { key: string, value: string}[] = [];
  func: any;

  constructor(controlOptions: {} = {} ) {
    super(controlOptions);
    this.options = controlOptions['options'] || [];
    this.func = controlOptions['func'];
  }
}
