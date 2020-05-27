import { Component } from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-temp-driven',
  templateUrl: './temp-driven.component.html',
  styleUrls: ['./temp-driven.component.css']
})
export class TempDrivenComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  userModel = new User('John','jsmith@gmail.com', 6423153487,'default', 'morning', true);

  validateTopic(value){
    if(value == 'default'){
      this.topicHasError = true;

    }else {
      this.topicHasError = false;
    }
  }

  myfun(tdf: any) {
    console.log(tdf);
  }


}
