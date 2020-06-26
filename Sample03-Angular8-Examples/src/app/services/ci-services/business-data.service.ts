import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessDataService {

  private shoeStock = new Subject<number>();
  subscriber$ = this.shoeStock.asObservable();

  constructor() { }

  updateStockData(data): void {
    this.shoeStock.next(data);
  }

  getStockData(): Observable<any> {
    return this.subscriber$;
  }
}
