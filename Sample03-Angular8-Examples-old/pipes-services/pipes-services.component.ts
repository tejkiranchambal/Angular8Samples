import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-services',
  templateUrl: './pipes-services.component.html',
  styleUrls: ['./pipes-services.component.css']
})
export class PipesServicesComponent implements OnInit {
  public title = 'pipes';
  public name = 'Build in Pipes';
  public msg = 'we are understanding pipes';
  public fullName = {
    firstName: 'xyz',
    lastName: 'abc'
  };
  public testDate = new Date();
  public value = '';
  constructor() { }

  ngOnInit() {

  }

}
