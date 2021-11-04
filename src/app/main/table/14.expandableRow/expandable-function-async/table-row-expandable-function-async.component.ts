import { Component, Injector, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DummyService } from 'src/app/shared/services/dummy.service';

import { TableUtils } from '../../table-utils';

@Component({
  selector: 'table-row-expandable-function-async',
  templateUrl: 'table-row-expandable-function-async.component.html'
})
export class TableRowExpandableFunctionAsyncComponent implements OnInit{
  
  service: DummyService;
  context: any;
  //Variable to better perfomance and not looping queries because of change detection.
  cache: Object = {};

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }
  
  constructor( protected injector: Injector ) {
    this.service = this.injector.get(DummyService);
    // Bind context
    this.context = this.showExpandableIcon.bind(this);
  }

  ngOnInit(): void {
    this.configureService();
  }

  protected configureService() {
    const conf = this.service.getDefaultServiceConfiguration('customers');
    this.service.configureService(conf);
  }

  showExpandableIcon(row: any, rowIndex: number):Observable<boolean> {
    // Filter by current row customerID
    const filter = {
      'CUSTOMERID': row.CUSTOMERID
    };
    const columns = [];
    let result: boolean = true;
    // Check if customerID is in cache so we avoid to do the query again and again.
    if(this.cache[row.CUSTOMERID] != null) {
      return of(this.cache[row.CUSTOMERID]);
    } else {
      this.service.query(filter, columns, 'customerAccount').subscribe(resp => {
        if (resp.code === 0) {
          result = resp.data.length != 0 ? true : false;
          this.cache[row.CUSTOMERID] = result;
          return of(result);
        }
      });
    }
  }

}
