

import { Injectable, Injector } from '@angular/core';
import { BaseDataService, Observable, Util } from 'ontimize-web-ngx';
import { IRickAndMortyResponse } from './rickandmorty-response.interface';
import { RickAndMortyResponseAdapter } from './rickandmorty-response.adapter';
import { RickAndMortyRequestArgumentsAdapter } from './rickandmorty-request-adapter';

@Injectable()
export class RickAndMortyService extends BaseDataService<IRickAndMortyResponse> {

  constructor(injector: Injector) {
    super(injector);
    this.requestArgumentAdapter = this.injector.get(RickAndMortyRequestArgumentsAdapter);
  }

  public configureService(config: any): void {
    super.configureService(config);
    this.path = config.path;
  }

  public configureAdapter() {
    this.adapter = this.injector.get(RickAndMortyResponseAdapter);
  }

  query(filter: any, columns: string[], entity: string, sqlTypes: any, pageable?: boolean): Observable<IRickAndMortyResponse> {

    let page;
    const queryParamsToString = this.toQueryParams(filter);

    //pageable
    if (pageable) {
      const paginationContext = this.getPaginationContext();
      page = paginationContext.pageNumber ?? 0;
    }

    const queryParamsString = ((Util.isDefined(filter) && !Util.isObjectEmpty(filter)) ? (queryParamsToString + '&') : '?') + (page ? 'page=' + page : '');

    let url = `${this.urlBase}${this.path}${queryParamsString}`;

    return this.doRequest({
      method: 'GET',
      url: url,
      options: {} // This overrides the default http headers. Remove it if you are using an ontimize based API in the backend
    });

  }

  advancedQuery(...args: [any, ...any[]]): Observable<IRickAndMortyResponse> {
    return this.query(args[0], args[1], args[2], args[3], true);
  }


  queryById(args_0: any, ...args: any[]): Observable<IRickAndMortyResponse> {
    throw new Error('Method not implemented.');
  }


  insert(args_0: any, ...args: any[]): Observable<IRickAndMortyResponse> {
    throw new Error('Method not implemented.');
  }
  update(args_0: any, ...args: any[]): Observable<IRickAndMortyResponse> {
    throw new Error('Method not implemented.');
  }
  delete(args_0: any, ...args: any[]): Observable<IRickAndMortyResponse> {
    throw new Error('Method not implemented.');
  }

  /**
* Converts a filter object into a query parameter string for a REST request,
* adapted to the Rick and Morty API.
*
* This method removes wildcard characters like `%` (e.g., from SQL-like search patterns),
* and properly encodes keys and values for safe use in a URL.
*
* It also filters out null, undefined, or empty values.
*
* @param obj An object with key-value pairs representing the search filters (e.g., { name: '%rick%' })
* @returns A query string formatted for use in a URL (e.g., "?name=rick")
*
* @example
* toQueryParams({ name: '%morty%', gender: '%male%' });
* // Returns: "?name=morty&gender=male"
*/
  public toQueryParams(obj: Record<string, any>): string {
    const params = Object.entries(obj)
      .filter(([_, value]) => !!value) // remove null/undefined/empty values
      .map(([key, value]) => {
        const cleanValue = value.replace(/%/g, ''); // remove wildcard %
        return `${encodeURIComponent(key)}=${encodeURIComponent(cleanValue)}`;
      })
      .join('&');
    return `?${params}`;
  }


}
