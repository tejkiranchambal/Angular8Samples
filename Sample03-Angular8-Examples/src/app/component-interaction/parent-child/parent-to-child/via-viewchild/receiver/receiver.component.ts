import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-receiver',
  template: `<h1>Hello {{doToggle? 'Windows' : msg}}!</h1>`,
  styles: []
})
export class ReceiverComponent {
  @Input() msg: string;
  doToggle: boolean;

  toggleMessage() {
    this.doToggle = !this.doToggle;
  }

}
