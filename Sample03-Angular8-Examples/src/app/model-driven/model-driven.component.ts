import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl } from "@angular/forms";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { forbiddenNameValidator } from "../shared/user-name.validator";
import {passwordValidator} from "../shared/password.validator";
import {ageValidator} from "../shared/age.validator";
import {emailDomainValidator} from "../shared/email-domain.validator";

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  constructor( private fb: FormBuilder ) { }

 registrationForm : FormGroup;
  showDeleteAll : boolean = false;
  //getter methods
  get userName(){ return this.registrationForm.get('userName'); }
  get password(){ return this.registrationForm.get('password'); }
  get confirmPassword() { return this.registrationForm.get('confirmPassword'); }
  get dob() { return this.registrationForm.get('dob'); }
  get email(){ return this.registrationForm.get('email');  }
  get mobile(){ return this.registrationForm.get('mobile');  }
  get alternateEmails() { return this.registrationForm.get('alternateEmails') as FormArray; }

  addAlternateEmails(){
    this.alternateEmails.push(this.fb.control('',[emailDomainValidator, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]));
    this.showDeleteAll = true;
  }

  deleteAllAlternateEmails(){
    this.alternateEmails.clear();
    this.showDeleteAll = false;
  }

  deleteAlternateEmailsAtIndex(index){
    this.alternateEmails.removeAt(index);
    if(this.alternateEmails.length == 0) this.showDeleteAll = false;
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName : ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/admin/)]],
      password: ['',[Validators.required, Validators.minLength(8), forbiddenNameValidator(/password/),
        Validators.compose([
          Validators.pattern(/\d/),
          Validators.pattern(/[A-Z]/),
          Validators.pattern(/[a-z]/),
          Validators.pattern(/[.!@#$%^&*?]/)]
        )]],
      confirmPassword: ['', [Validators.required]],
      dob: ['', [Validators.required , ageValidator]],
      email : ['', [ emailDomainValidator, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      subscribe : [false],
      mobile: [, [Validators.required, Validators.maxLength(10), Validators.pattern(/[7-9][0-9]{9}/)]],
      address : this.fb.group({
        city : [''],
        state : [''],
        pinCode : ['']
      }),
      alternateEmails : this.fb.array([])
    }, { validators : passwordValidator } );
    this.registrationForm.get('subscribe').valueChanges.subscribe(checkedValue =>{
      if(checkedValue){
        this.email.setValidators([Validators.required, emailDomainValidator, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]);
      }else {
        this.email.clearValidators();
        this.email.setValidators([emailDomainValidator, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]);
      }
      this.email.updateValueAndValidity();
    });
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
  loadApiData() {
    this.registrationForm.patchValue({
      userName: 'johnSmith',
      password: 'Js@123456',
      confirmPassword: 'Js@123456',
      email: 'Js@chambal.com',
      dob: '1990-03-22',
      mobile : 9460756423,
      address : {
        state: 'Raj',
        pinCode : '313001'
      }
    })
  }

  onSubmit(){
    console.log(this.registrationForm.value);
  }
}
