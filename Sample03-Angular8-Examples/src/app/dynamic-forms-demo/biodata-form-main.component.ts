import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BiodataBase} from './biodata-base';
import {AllInputListService} from '../services/dynamic-form-services/all-input-list.service';

@Component({
  selector: 'app-bio-data',
  templateUrl: './biodata-form-main.component.html',
  providers: [AllInputListService]
})
export class BiodataFormMainComponent implements OnInit {
  biodata$: Observable<BiodataBase<any>[]>;

  constructor(service: AllInputListService) {
    this.biodata$ = service.getInput();
  }

  ngOnInit() { }

}
