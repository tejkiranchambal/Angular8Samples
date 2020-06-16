import {BiodataBase} from '../biodata-base';

export class FormInput extends BiodataBase<string> {
  controlType = 'text';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
