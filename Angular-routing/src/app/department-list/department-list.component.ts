import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../service/data-service.service';
import {ParamMap, Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departmentList;
  selectedId;
  constructor(private service: DataServiceService, private route: Router , private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.departmentList = this.service.getDepartmentList();
    this.activatedRoute.paramMap.subscribe(( parmas: ParamMap) => {
      this.selectedId = parseInt(parmas.get('id'));
    });
  }
  onChangeDepartment(department) {
    this.route.navigate(['department', department.id]);
  }

  isSelected(departmentId) {
    return departmentId === this.selectedId;
  }
}
