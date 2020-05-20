import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl } from "@angular/forms";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  constructor( private fb: FormBuilder ) { }

  get userName(){
    return this.registrationForm.get('userName');
  }

  registrationForm = this.fb.group({
    userName : ['', [Validators.required, Validators.minLength(3)]],
    password: [''],
    confirmPassword: [''],
    address : this.fb.group({
      city : [''],
      state : [''],
      pinCode : ['']
    })
  });

  ngOnInit() {

  }

  // Using FormGroup Classes
  /*registrationForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword : new FormControl(''),
    address : new FormGroup({
      city : new FormControl(''),
      state : new FormControl(''),
      pinCode : new FormControl('')
    })
  });*/

  // using setValue method
  /*loadApiData(){
    this.registrationForm.setValue({
      userName: 'John Smith',
      password: 'abcd',
      confirmPassword: 'abcd',
      address : {
        city : 'Udaipur',
        state: 'Raj',
        pinCode : '313001'
      }
    })
  }*/

  // Using patchValue Method
  loadApiData(){
    this.registrationForm.patchValue({
      password: 'abcd',
      confirmPassword: 'abcd',
      address : {
        state: 'Raj',
        pinCode : '313001'
      }
    })
  }


}
