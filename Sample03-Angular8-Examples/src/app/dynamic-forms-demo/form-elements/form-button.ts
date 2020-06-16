import {BiodataBase} from '../biodata-base';

export class FormButton extends BiodataBase<string> {
  controlType = 'button';
  type: string;
  class: string;
  func: any;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.class = options['class'] || '';
    this.func = options['func'] || '';
  }
}
