import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {InputBase1} from '../dynamic-form/InputBase1';
import {InputServices} from '../services/input.service';

@Component({
  selector: 'app-show-dynamic',
  templateUrl: './show-dynamic.component.html',
  styleUrls: ['./show-dynamic.component.css']
})
export class ShowDynamicComponent implements OnInit {

  inputItems$: Observable<InputBase1<any>[]>;

  constructor(data: InputServices) {
    this.inputItems$ = data.getRegistrationData();
  }
  ngOnInit() {
  }

}
