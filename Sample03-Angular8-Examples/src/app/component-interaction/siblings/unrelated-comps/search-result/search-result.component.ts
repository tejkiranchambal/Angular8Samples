import {Component, OnInit} from '@angular/core';
import {SearchPortalDataService} from '../../../../services/ci-services/search-portal-data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styles: []
})
export class SearchResultComponent implements OnInit {
  searchFields: any;

  constructor(private searchService: SearchPortalDataService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchFields = this.searchService.getPortalData();
  }

  goBack(): void {
    this.router.navigate(['./../../searchPortal'], {relativeTo: this.activatedRoute});
  }

}
