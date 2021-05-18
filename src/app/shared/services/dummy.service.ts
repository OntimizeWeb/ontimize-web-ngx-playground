import { Injector } from '@angular/core';
import { AppConfig, FilterExpressionUtils, OntimizeService, ServiceResponse, Util } from 'ontimize-web-ngx';
import { Observable, Subscriber } from 'rxjs';

export class DummyService extends OntimizeService {

  static mappings: object = {
    customer: '/customers-data.json',
    customerRecursive: '/customers-recursive-data.json',
    account: '/accounts-data.json',
    customerAccount: '/customer-accounts-data.json',
    accountConcepts: '/concepts-data.json',
    movement: '/movements.json',
    accountMovementTypes: '/movementtypes-data.json',
    olympicWinners: '/olympic-winners-data.json'
  };

  constructor(protected injector: Injector) {
    super(injector);
  }

  public getDefaultServiceConfiguration(serviceName?: string): object {
    const configuration = this.injector.get(AppConfig).getServiceConfiguration();

    let servConfig = {};
    if (serviceName && configuration.hasOwnProperty(serviceName)) {
      servConfig = configuration[serviceName];
    }
    return servConfig;
  }

  public configureService(config: any): void {
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
