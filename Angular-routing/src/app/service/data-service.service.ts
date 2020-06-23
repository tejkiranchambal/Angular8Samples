import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  getDepartmentList() {
    return[
      {id: 1, name: 'IT'},
      {id: 2, name: 'HR'},
      {id: 3, name: 'Sales'},
      {id: 4, name: 'Production'},
      {id: 5, name: 'Marketing '},
      {id: 6, name: 'Purchasing'},
      {id: 7, name: 'Research'},
      {id: 8, name: 'Accounting'}
    ];
}
}
