import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-samosa',
  templateUrl: './samosa.component.html',
  styles: []
})
export class SamosaComponent {

  @Input()childSamose: Array<boolean>;
  @Output()emitEat: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  gobble() {
    this.emitEat.emit("eat!!");
  }
}
