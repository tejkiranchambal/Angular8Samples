import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  public person = [];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.person = this.dataservice.getPerson();
  }

}
