export class InputBase1<T> {
  value: T;
  arrayValue: T[];
  key: string;
  label: string;
  controlType: string;
  type: string;
  placeholder: string;
  isArray: boolean;
  isRequired: boolean;
  show: boolean;
  callbackMethod: object;
  options: { key: string, value: string }[];

  constructor(options: {
    value?: T,
    arrayValue?: T[];
    key?: string,
    label?: string,
    controlType?: string,
    type?: string,
    placeholder?: string,
    isRequired?: boolean,
    show?: boolean,
    isArray?: boolean,
    callbackMethod?: object,

    options?: { key: string, value: string }[]

  } = {}) {
    this.value = options.value;
    this.arrayValue = options.arrayValue;
    this.key = options.key || '';
    this.label = options.label;
    this.controlType = options.controlType;
    this.type = options.type;
    this.options = options.options;
    this.placeholder = options.placeholder || 'Enter your input';
    this.isRequired =  options.isRequired;
    this.show = options.show;
    this.isArray = options.isArray;
    this.callbackMethod = options.callbackMethod;
  }
}
