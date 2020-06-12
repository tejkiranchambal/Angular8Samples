import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {InputBase1} from '../dynamic-form/InputBase1';
import {InputServices} from '../services/input.service';
import {DynamicLoginService} from '../services/dynamic-login.service';

@Component({
  selector: 'app-dynamic-login',
  templateUrl: './dynamic-login.component.html',
  styleUrls: ['./dynamic-login.component.css']
})
export class DynamicLoginComponent implements OnInit {

  inputItems$: Observable<InputBase1<any>[]>;

  constructor(data: InputServices) {
    this.inputItems$ = data.getLoginData();
  }
  ngOnInit() {
  }

}
