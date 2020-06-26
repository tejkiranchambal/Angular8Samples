import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchPortalDataService {

  constructor() {
  }

  private searchData: any;

  static getPortalSearchableFields(): Array<any> {
    return [
      {
        id: 1,
        name: 'Name',
        displayName: 'Name',
        isOptDisabled: false,
        groupName: 'BOTH'
      },
      {
        id: 2,
        name: 'TCMID',
        displayName: 'TCM ID',
        isOptDisabled: false,
        groupName: 'BOTH'
      },
      {
        id: 3,
        name: 'Version',
        displayName: 'Version',
        isOptDisabled: false,
        groupName: 'BOTH'
      },
      {
        id: 6,
        name: 'ComponentName',
        displayName: 'Component Name',
        isOptDisabled: false,
        groupName: 'COMPONENT'
      },
      {
        id: 7,
        name: 'ComponentId',
        displayName: 'Component TCM ID',
        isOptDisabled: false,
        groupName: 'COMPONENT'
      },
      {
        id: 8,
        name: 'ComponentVersion',
        displayName: 'Component Version',
        isOptDisabled: false,
        groupName: 'COMPONENT'
      },
      {
        id: 11,
        name: 'BundleId',
        displayName: 'Bundle TCM ID',
        isOptDisabled: false,
        groupName: 'BOTH'
      },
      {
        id: 12,
        name: 'BundleName',
        displayName: 'Bundle Name',
        isOptDisabled: false,
        groupName: 'BOTH'
      },
      {
        id: 16,
        name: 'Phrase',
        displayName: 'Exact Phrase Match',
        groupName: 'BOTH'
      }
    ];
  }

  setPortalData(data): void {
    this.searchData = data;
  }

  getPortalData(): any {
    return this.searchData;
  }

}
