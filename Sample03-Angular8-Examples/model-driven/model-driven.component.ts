import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  constructor() { }

  registrationForm = new FormGroup({
    userName : new FormControl('john'),
    password : new FormControl(''),
    confirmPassword: new FormControl('')
  });

  ngOnInit() {
  }

}
