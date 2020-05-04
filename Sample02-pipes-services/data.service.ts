import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getPerson() {
    return[
      {id: 101, name: 'john', age: 22, gender: 'male'},
      {id: 102, name: 'janny', age: 22, gender: 'Female'},
      {id: 103, name: 'sia', age: 22, gender: 'Female'},
      {id: 104, name: 'jordan', age: 22, gender: 'Male'},
      {id: 105, name: 'mary', age: 22, gender: 'Female'},
      {id: 106, name: 'tia', age: 22, gender: 'Female'},
      {id: 105, name: 'harry', age: 22, gender: 'Male'},
      {id: 106, name: 'porter', age: 22, gender: 'Male'},
      ];
  }
}
