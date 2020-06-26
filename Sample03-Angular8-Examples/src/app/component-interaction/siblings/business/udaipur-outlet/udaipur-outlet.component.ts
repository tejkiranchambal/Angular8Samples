import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BusinessDataService} from '../../../../services/ci-services/business-data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-udaipur-outlet',
  templateUrl: './udaipur-outlet.component.html',
  styles: []
})
export class UdaipurOutletComponent implements OnInit, OnDestroy {
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
