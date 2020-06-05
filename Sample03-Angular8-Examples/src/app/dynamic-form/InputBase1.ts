
export class InputBase1<T> {
  value: T;
  key: string;
  label: string;
  controlType: string;
  type: string;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    controlType?: string,
    type?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label;
    this.controlType = options.controlType;
    this.type = options.type;
  }
}
