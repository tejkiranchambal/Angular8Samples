import {InputBase1} from './InputBase1';


export class InputTextbox extends InputBase1<string> {
  controlType = 'textbox';
  // type: string;

  constructor(options: {} = {}) {
    super(options);
   // this.type = options['type'] || '';
    /*text | password | email*/
  }
}
