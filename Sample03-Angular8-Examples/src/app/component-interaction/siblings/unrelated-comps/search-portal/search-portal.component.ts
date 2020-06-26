import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchPortalDataService} from '../../../../services/ci-services/search-portal-data.service';

@Component({
  selector: 'app-search-portal',
  templateUrl: './search-portal.component.html',
  styles: []
})
export class SearchPortalComponent implements OnInit {
  searchMetadata: FormGroup;
  searchableFields = [ ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private searchService: SearchPortalDataService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchMetadata = this.fb.group({
      fullText: [''],
      fields : this.fb.array([])
    } );

    this.searchableFields = SearchPortalDataService.getPortalSearchableFields();
  }

  createField(): FormGroup {
    return this.fb.group({
      fieldKey: ['', [Validators.required]],
      fieldValue: [null, [Validators.required]]
    });
  }

  addNewField(): void {
    this.fields.push(this.createField());
  }

  removeField(index): void {
    this.fields.removeAt(index);
  }

  get fields(): FormArray {
    return this.searchMetadata.get('fields') as FormArray;
  }

  _search(): void {
    this.searchService.setPortalData(this.searchMetadata.value);
    this.router.navigate(['searchResult'], {relativeTo: this.activatedRoute});
  }
}
