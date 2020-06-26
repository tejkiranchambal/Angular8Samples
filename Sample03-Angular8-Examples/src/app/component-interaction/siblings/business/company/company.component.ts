import {Component, OnDestroy, OnInit} from '@angular/core';
import {BusinessDataService} from '../../../../services/ci-services/business-data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styles: []
})
export class CompanyComponent implements OnInit, OnDestroy {
  totalStock = 5;
  subscription: Subscription;
  constructor(private stockService: BusinessDataService) { }

  ngOnInit() {
    this.subscription = this.stockService.getStockData().subscribe(data => this.totalStock = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addStock(): void {
    this.stockService.updateStockData(this.totalStock + 5);
  }
}
// https://www.dotnettricks.com/learn/angular/sharing-data-between-angular-components-methods
