import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'pipes';
  public name = 'Build in Pipes';
  public msg = 'we are understanding pipes';
  public fullName = {
    firstName: 'xyz',
    lastName: 'abc'
  };
  public testDate = new Date();
  public value = '';

}

