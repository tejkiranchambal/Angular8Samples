import { Component } from '@angular/core';

@Component({
  selector: 'app-thali',
  templateUrl: './thali.component.html',
  styles: []
})
export class ThaliComponent {

  samose: Array<boolean> = [true, true, true, true, true];

  constructor() { }

  eatSamosa() {
    this.samose.pop();
  }

  addSamosa() {
    this.samose.push(true);
  }

}
// https://www.intertech.com/Blog/angular-component-tutorial-inputs-outputs-and-eventemitters/
