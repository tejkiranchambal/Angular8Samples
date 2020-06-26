import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ReceiverComponent} from '../receiver/receiver.component';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styles: []
})
export class MessengerComponent /*implements AfterViewInit*/ {

  message = 'Angular';

  @ViewChild(ReceiverComponent, {static: false}) receiverComp: ReceiverComponent;

  /*ngAfterViewInit() {
    console.log('Hello ', this.receiverComp.msg);
  }*/

  toggleTitle() {
    this.receiverComp.toggleMessage();
  }

}
