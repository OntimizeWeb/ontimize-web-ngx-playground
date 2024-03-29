import { Injectable, Injector } from '@angular/core';
import { AppConfig, AuthService, FilterExpressionUtils, OntimizeService, ServiceResponse, Util } from 'ontimize-web-ngx';
import { Observable, Subscriber } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable()
export class DummyService extends OntimizeService {

  static mappings: object = {
    customer: '/customers-data.json',
    customerRecursive: '/customers-recursive-data.json',
    customerTree: '/customers-tree-data.json',
    customerAccountsTree: '/accounts-tree-data.json',
    conceptsTree: '/concepts-tree-data.json',
    movementsTypesTree: '/movementtypes-tree-data.json',
    account: '/accounts-data.json',
    customerAccount: '/customer-accounts-data.json',
    accountConcepts: '/concepts-data.json',
    movement: '/movements.json',
    accountMovementTypes: '/movementtypes-data.json',
    olympicWinners: '/olympic-winners-data-50.json',
    comboCountry: '/combo-country-data.json',
    comboState: '/combo-state-data.json'
  };

  constructor(protected injector: Injector) {
    super(injector);
  }

  public getDefaultServiceConfiguration(serviceName?: string): Object {

    const authService = this.injector.get(AuthService);
    const configuration = this.injector.get(AppConfig).getServiceConfiguration();

    let servConfig = {};
    if (serviceName && configuration.hasOwnProperty(serviceName)) {
      servConfig = configuration[serviceName];
    }
    servConfig['session'] = authService.getSessionInfo();
    return servConfig;
  }

  public configureService(config: any): void {
    super.configureService(config);
    this._urlBase = './assets/dummy-data';

    if (config.entity !== undefined) {
      this.entity = config.entity;
    }
  }

  public startsession(user: string, password: string): Observable<any> {
    return undefined;
  }

  public endsession(user: string, sessionId: number): Observable<any> {
    return undefined;
  }

  public hassession(user: string, sessionId: number): Observable<any> {
    return undefined;
  }

  public query(kv?: object, av?: Array<string>, entity?: string, sqltypes?: object): Observable<any> {
    entity = (Util.isDefined(entity)) ? entity : this.entity;

    const url = this._urlBase + DummyService.mappings[entity];
    const options = {
      headers: this.buildHeaders()
    };
    return this.doRequest({
      method: 'GET',
      url,
      options,
      successCallback: (resp, subscriber) => {
        this.customParseSuccessfulQueryResponse(kv, resp, subscriber);
      },
      errorCallBack: this.parseUnsuccessfulQueryResponse
    });
  }

  public filteredQuery(kv?: object, av?: Array<string>, entity?: string,
    sqltypes?: object): Observable<any> {
    entity = (Util.isDefined(entity)) ? entity : this.entity;

    const url = this._urlBase + DummyService.mappings[entity];
    const options = {
      headers: this.buildHeaders()
    };
    return this.doRequest({
      method: 'GET',
      url: url,
      options: options,
      successCallback: (resp, subscriber) => {
        const filtered = resp.data.filter(item => {
          const equal = Object.keys(kv).every(key => item[key] === kv[key]);
          return equal;
        });
        resp.data = filtered;
        this.customParseSuccessfulQueryResponse(kv, resp, subscriber);
      },
      errorCallBack: this.parseUnsuccessfulQueryResponse
    });
  }

  public queryWithDelay(kv?: object, av?: Array<string>, entity?: string, sqltypes?: object): Observable<any> {
    const dataObservable: Observable<ServiceResponse> = new Observable((observer: Subscriber<ServiceResponse>) => {
      setTimeout(() => {
        this.query(kv, av, entity, sqltypes).subscribe({
          next: (resp: ServiceResponse) => observer.next(resp),
          error: (err: any) => observer.error(err)
        })
      }, 3000);
    });
    return dataObservable.pipe(share());
  }

  protected customParseSuccessfulQueryResponse(kv: any, resp: ServiceResponse, subscriber: Subscriber<ServiceResponse>) {
    if (resp && resp.isUnauthorized()) {
      this.clientErrorFallback(401);
    } else if (resp && resp.isFailed()) {
      subscriber.error(resp.message);
    } else if (resp && resp.isSuccessful()) {
      resp.data = this.filterResponse(kv, resp);
      subscriber.next(resp);
    } else {
      subscriber.error('Service unavailable');
    }
  }

  private filterResponse(kv: object, resp) {
    if (kv.hasOwnProperty(FilterExpressionUtils.FILTER_EXPRESSION_KEY)) {
      return this.fetchRoots(resp);
    }

    const keys = Object.keys(kv || {});
    const result = [];
    resp.data.forEach(element => {
      let add = true;
      keys.forEach(key => {
        add = add && (element[key] === kv[key]);
      });
      if (add) {
        result.push(element);
      }
    });
    return result;
  }

  private fetchRoots(resp: any): Array<any> {
    const rootsArray = [];
    resp.data.forEach(element => {
      if (!element.hasOwnProperty('PARENT')) {
        rootsArray.push(element);
      }
    });
    return rootsArray;
  }

}
