export class InputBase1<T> {
  value: T;
  key: string;
  label: string;
  controlType: string;
  type: string;
  placeholder: string;
  isRequired: boolean;
  show: boolean
  options: { key: string, value: string }[];

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    controlType?: string,
    type?: string,
    placeholder?: string,
    isRequired?: boolean,
    show?: boolean,
    options?: { key: string, value: string }[]

  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label;
    this.controlType = options.controlType;
    this.type = options.type;
    this.options = options.options;
    this.placeholder = options.placeholder || 'Enter your input';
    this.isRequired =  options.isRequired;
    this.show = options.show;
  }
}
