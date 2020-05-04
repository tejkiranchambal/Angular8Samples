import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  public person = [];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.person = this.dataservice.getPerson();
  }

}
