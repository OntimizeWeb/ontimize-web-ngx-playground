import { Observable } from 'rxjs';

import { Injectable, Injector } from '@angular/core';
import { BaseService, Util } from 'ontimize-web-ngx';
import { StarsWarsResponseAdapter } from './star-wars-response-adapter';
import { SwapiResponse } from './wapi-service-response.class';

@Injectable()
export class StarWarsService extends BaseService<SwapiResponse> {

  constructor(protected injector: Injector) {
    super(injector);
  }

  public query(kv?: Object, av?: Array<string>, entity?: string, sqltypes?: Object): Observable<any> {
    const url = 'https://swapi.dev/api/' + entity ;

    return this.doRequest({
      method: 'GET',
      url: url,
      options: {} // This overrides the default http headers. Remove it if you are using an ontimize based API in the backend
    });
  }

  public advancedQuery(kv?: Object, av?: Array<string>, entity?: string, sqltypes?: Object, offset?: number, pagesize?: number, orderby?: Array<Object>): Observable<any> {
    offset = (Util.isDefined(offset)) ? offset :0;

    // Calculate page
    let page = 0;
    if (Util.isDefined(offset)) {
      page = Math.trunc(offset / 10) + 1;
    }

    let url = 'https://swapi.dev/api/' + entity + '/?format=json' + '&page=' + page;

    return this.doRequest({
      method: 'GET',
      url: url,
      options: {} // This overrides the default http headers. Remove it if you are using an ontimize based API in the backend
    });
  }

  public configureResponseAdapter() {
    this.adapter = this.injector.get(StarsWarsResponseAdapter);
  }

}
