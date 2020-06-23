import { Component, OnInit } from '@angular/core';
import {  Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList;
  constructor(private route: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe( data => {
      this.employeeList = data;
      });
  }


}
