import {InputBase1} from './InputBase1';


export class InputCombobox extends InputBase1<string> {
  controlType = 'combobox';

  constructor(option: {} = {}) {
    super(option);
  }
}
