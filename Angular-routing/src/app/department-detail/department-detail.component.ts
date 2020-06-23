import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
   departmentId;
  constructor(private activatedRoute: ActivatedRoute , private router: Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.activatedRoute.paramMap.subscribe(( parmas: ParamMap) => {
      this.departmentId = parseInt(parmas.get('id'));
    });
  }

  goPrevious() {
    const previousId = this.departmentId - 1;
    this.router.navigate(['/department', previousId]);
  }
  goNext() {
    const  nextId = this.departmentId + 1;
    this.router.navigate(['/department', nextId]);
  }

  goBack() {
    this.router.navigate(['/departments', {id: this.departmentId}]);
  }
  showOverview() {
   this.router.navigate(['overview'], { relativeTo: this.activatedRoute});
  }
  showContact() {
    this.router.navigate(['contact']);
  }

}
