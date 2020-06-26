import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {BusinessDataService} from '../../../../services/ci-services/business-data.service';

@Component({
  selector: 'app-jaipur-outlet',
  templateUrl: './jaipur-outlet.component.html',
  styles: []
})
export class JaipurOutletComponent implements OnInit, OnDestroy {
  remainingStock: number;
  subscription: Subscription;

  @Input()
  set initialStock(stock) {
    this.remainingStock = stock;
  }

  constructor(private stockService: BusinessDataService) { }

  ngOnInit() {
    this.subscription = this.stockService.getStockData().subscribe(data => this.remainingStock = data);
  }

  sellShoe() {
    if (this.remainingStock > 0) {
      this.stockService.updateStockData(--this.remainingStock);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
