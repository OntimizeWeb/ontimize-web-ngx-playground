const FAKE_USERS = [
  {
    'id': 1,
    'name': 'Leanne Graham',
    'username': 'Bret',
    'email': 'Sincere@april.biz',
    'street': 'Kulas Light',
    'suite': 'Apt. 556',
    'city': 'Gwenborough',
    'zipcode': '92998-3874',
    'lat': -37.3159,
    'lng': 81.1496,
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'companyname': 'Romaguera-Crona',
    'companycatchPhrase': 'Multi-layered client-server neural-net',
    'companybs': 'harness real-time e-markets',
    'thumbnailUrl': 'assets/images/people/m1.jpg',
    'image': 'assets/images/people/m1.jpg',
    'body': `laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora
    quo necessitatibus`
  },
  {
    'id': 2,
    'name': 'Ervin Howell',
    'username': 'Antonette',
    'email': 'Shanna@melissa.tv',
    'street': 'Victor Plains',
    'suite': 'Suite 879',
    'city': 'Wisokyburgh',
    'zipcode': '90566-7771',
    'lat': -43.9509,
    'lng': -34.4618,
    'phone': '010-692-6593 x09125',
    'website': 'anastasia.net',
    'companyname': 'Deckow-Crist',
    'companycatchPhrase': 'Proactive didactic contingency',
    'companybs': 'synergize scalable supply-chains',
    'thumbnailUrl': 'assets/images/people/m2.jpg',
    'image': 'assets/images/people/m2.jpg',
    'body': `est natus enim nihil est dolore omnis voluptatem
     numquam\net omnis occaecati quod ullam at\nvoluptatem error
     expedita pariatur\nnihil sint nostrum voluptatem reiciendis et`
  },
  {
    'id': 3,
    'name': 'Clementine Bauch',
    'username': 'Samantha',
    'email': 'Nathan@yesenia.net',
    'street': 'Douglas Extension',
    'suite': 'Suite 847',
    'city': 'McKenziehaven',
    'zipcode': '59590-4157',
    'lat': -68.6102,
    'lng': -47.0653,
    'phone': '1-463-123-4447',
    'website': 'ramiro.info',
    'companyname': 'Romaguera-Jacobson',
    'companycatchPhrase': 'Face to face bifurcated interface',
    'companybs': 'e-enable strategic applications',
    'thumbnailUrl': 'assets/images/people/w1.jpg',
    'image': 'assets/images/people/w1.jpg',
    'body': `quia molestiae reprehenderit quasi aspernatur\naut expedita
    occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe
     quia accusamus maiores nam est`
  },
  {
    'id': 4,
    'name': 'Patricia Lebsack',
    'username': 'Karianne',
    'email': 'Julianne.OConner@kory.org',
    'street': 'Hoeger Mall',
    'suite': 'Apt. 692',
    'city': 'South Elvis',
    'zipcode': '53919-4257',
    'lat': 29.4572,
    'lng': -164.2990,
    'phone': '493-170-9623 x156',
    'website': 'kale.biz',
    'companyname': 'Robel-Corkery',
    'companycatchPhrase': 'Multi-tiered zero tolerance productivity',
    'companybs': 'transition cutting-edge web services',
    'thumbnailUrl': 'assets/images/people/w2.jpg',
    'image': 'assets/images/people/w2.jpg',
    'body': `non et atque\noccaecati deserunt quas accusantium unde odit
    nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net
    qui rerum deleniti ut occaecati`
  },
  {
    'id': 5,
    'name': 'Chelsey Dietrich',
    'username': 'Kamren',
    'email': 'Lucio_Hettinger@annie.ca',
    'street': 'Skiles Walks',
    'suite': 'Suite 351',
    'city': 'Roscoeview',
    'zipcode': '33263',
    'lat': -31.8129,
    'lng': 62.5342,
    'phone': '(254)954-1289',
    'website': 'demarco.info',
    'companyname': 'Keebler LLC',
    'companycatchPhrase': 'User-centric fault-tolerant solution',
    'companybs': 'revolutionize end-to-end systems',
    'thumbnailUrl': 'assets/images/people/m3.jpg',
    'image': 'assets/images/people/m3.jpg',
    'body': `harum non quasi et ratione\ntempore iure ex voluptates
    in ratione\nharum architecto fugit inventore cupiditate\nvoluptates
    magni quo et`
  },
  {
    'id': 6,
    'name': 'Mrs. Dennis Schulist',
    'username': 'Leopoldo_Corkery',
    'email': 'Karley_Dach@jasper.info',
    'street': 'Norberto Crossing',
    'suite': 'Apt. 950',
    'city': 'South Christy',
    'zipcode': '23505-1337',
    'lat': -71.4197,
    'lng': 71.7478,
    'phone': '1-477-935-8478 x6430',
    'website': 'ola.org',
    'companyname': 'Considine-Lockman',
    'companycatchPhrase': 'Synchronised bottom-line interface',
    'companybs': 'e-enable innovative applications',
    'thumbnailUrl': 'assets/images/people/m4.jpg',
    'image': 'assets/images/people/m4.jpg',
    'body': `laudantium enim quasi est quidem`
  },
  {
    'id': 7,
    'name': 'Kurtis Weissnat',
    'username': 'Elwyn.Skiles',
    'email': 'Telly.Hoeger@billy.biz',
    'street': 'Rex Trail',
    'suite': 'Suite 280',
    'city': 'Howemouth',
    'zipcode': '58804-1099',
    'lat': 24.8918,
    'lng': 21.8984,
    'phone': '210.067.6132',
    'website': 'elvis.io',
    'companyname': 'Johns Group',
    'companycatchPhrase': 'Configurable multimedia task-force',
    'companybs': 'generate enterprise e-tailers',
    'thumbnailUrl': 'assets/images/people/m5.jpg',
    'image': 'assets/images/people/m5.jpg',
    'body': `est natus enim nihil est dolore omnis voluptatem numquam\net
    omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil
     sint nostrum voluptatem reiciendis et`
  },
  {
    'id': 8,
    'name': 'Nicholas Runolfsdottir V',
    'username': 'Maxime_Nienow',
    'email': 'Sherwood@rosamond.me',
    'street': 'Ellsworth Summit',
    'suite': 'Suite 729',
    'city': 'Aliyaview',
    'zipcode': '45169',
    'lat': -14.3990,
    'lng': -120.7677,
    'phone': '586.493.6943 x140',
    'website': 'jacynthe.com',
    'companyname': 'Abernathy Group',
    'companycatchPhrase': 'Implemented secondary concept',
    'companybs': 'e-enable extensible e-tailers',
    'thumbnailUrl': 'assets/images/people/m6.jpg',
    'image': 'assets/images/people/m6.jpg',
    'body': `quia molestiae reprehenderit quasi aspernatur\naut
    expedita occaecati aliquam eveniet laudantium\nomnis quibusdam
    delectus saepe quia accusamus maiores nam est`
  },
  {
    'id': 9,
    'name': 'Glenna Reichert',
    'username': 'Delphine',
    'email': 'Chaim_McDermo@dana.io',
    'street': 'Dayna Park',
    'suite': 'Suite 449',
    'city': 'Bartholomebury',
    'zipcode': '76495-3109',
    'lat': 24.6463,
    'lng': -168.8889,
    'phone': '(775)976-6794 x41206',
    'website': 'conrad.com',
    'companyname': 'Yost and Sons',
    'companycatchPhrase': 'Switchable contextually-based project',
    'companybs': 'aggregate real-time technologies',
    'thumbnailUrl': 'assets/images/people/w3.jpg',
    'image': 'assets/images/people/w3.jpg',
    'body': `non et atque\noccaecati deserunt quas accusantium unde
     odit nobis qui voluptatem\nquia voluptas consequuntur itaque
     dolor\net qui rerum deleniti ut occaecati`
  },
  {
    'id': 10,
    'name': 'Clementina DuBuque',
    'username': 'Moriah.Stanton',
    'email': 'Rey.Padberg@karina.biz',
    'street': 'Kattie Turnpike',
    'suite': 'Suite 198',
    'city': 'Lebsackbury',
    'zipcode': '31428-2261',
    'lat': -38.2386,
    'lng': 57.2232,
    'phone': '024-648-3804',
    'website': 'ambrose.net',
    'companyname': 'Hoeger LLC',
    'companycatchPhrase': 'Centralized empowering task-force',
    'companybs': 'target end-to-end models',
    'thumbnailUrl': 'assets/images/people/w4.jpg',
    'image': 'assets/images/people/w4.jpg',
    'body': `harum non quasi et ratione\ntempore iure ex voluptates in
      ratione\nharum architecto fugit inventore cupiditate`
  }];

const FAKE_DATAHYBRID = [
  { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
  { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
  { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
  { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
];

const HTML_DATA_GRID = `
 <o-grid content #grid attr="grid" title="{title}" service-type="rickandmorty" service="episodes" entity="episode"
      columns="id;name;movie;episode;air_date" keys="id" cols="{columns}" query-rows="{queryRows}" show-page-size="{showPageSize}"
      page-size-options="4;8;16" orderable="{orderable}" quick-filter="{quickfilter}" sortable-columns="name;episode"
      quick-filter-columns="name;episode" sort-column="{sortColumn}" controls="{controls}" refresh-button="{refreshButton}"
      insert-button="{insertButton}" pagination-controls="{paginationControls}" gutter-size="{gutterSize}px"
      show-footer="{showFooter}" fixed-header="yes" [ngStyle]="{'height':'600px'}">
      <o-grid-item *ngFor="let ep of grid.dataArray">
        <div class="card-inner">
          <div class="card-inner">
            <mat-card class="fill-minus-8" appearance="outlined">
              <mat-card-header>
                <div mat-card-avatar class="avatar-icon">
                  <mat-icon color="accent">movie</mat-icon>
                </div>
                <mat-card-title class="ellipsis-title">{{ ep.name }}</mat-card-title>
                <mat-card-subtitle>{{ ep.episode }}</mat-card-subtitle>
              </mat-card-header>

              <mat-card-content>
                <p><strong>Air date:</strong> {{ ep.air_date }}</p>
              </mat-card-content>

              <mat-card-actions fxFlexAlign="end">
                <button mat-raised-button color="primary">View details</button>
              </mat-card-actions>

            </mat-card>
          </div>
        </div>
      </o-grid-item>
    </o-grid>
`;

const HTML_DATA_GRID_FIXED = `
    <o-grid content #grid attr="grid" title="{title}" service-type="rickandmorty" service="characters" entity="character"
      columns="id;name;status;species;photo;location;origin" keys="id" fixed-header="{fixedHeader}" style="height:'{height}px'"
      pagination-controls="yes" query-rows="20" grid-item-height="2:1" fxFlex pageable="yes"
      cols="2" gutter-size="16px" quick-filter-columns="name">

      <o-grid-item *ngFor="let list of grid.dataArray">
        <mat-card  class="mat-elevation-z4 fill-minus-8">
          <div fxlayout="row" fxFill>
            <img mat-card-image src="{{list.image}}" fxFlex="35%" fxFill
              style="transition: opacity 0.5s; object-position: center center; object-fit: cover" />
            <div fxFlex="65%">
              <mat-card-header>
                <mat-card-title>{{list.name}}</mat-card-title>
                <mat-card-subtitle>{{list.status}} {{list.species}}</mat-card-subtitle>
              </mat-card-header>
              <mat-card-content>
                <p>
                  <label><strong> Last known location:</strong></label> &nbsp;<span>{{list.location.name}}</span>
                </p>
                <p>
                  <label><strong> First seen in:</strong></label> &nbsp;<span>{{list.origin.name}}</span>
                </p>
              </mat-card-content>
            </div>
          </div>
        </mat-card>

      </o-grid-item>
    </o-grid>
`;

const HTML_DATA_GRID_HYBRID = `
<o-grid #grid attr="grid" [static-data]="data" keys="text" columns="text;cols;rows;color" cols="4"
grid-item-height="100px" controls="no" gutter-size="0">
  <o-grid-item *ngFor="let list of grid.dataArray" [colspan]="list.cols" [rowspan]="list.rows">
    <div [style.background]="list.color" fxFill>
      {{list.text}}
    </div>
  </o-grid-item>
</o-grid>`;

const CSS_GRID_BASIC = `
.card-inner {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: center; // Centra verticalmente
  align-items: center; // Centra horizontalmente

  mat-card {
    &.fill-minus-8 {
      display: flex;
      flex-direction: column;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.02);
      }

      mat-card-header {
        .avatar-icon {
          background-color: #e0e0e0;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ellipsis-title {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          max-height: 3em;
          line-height: 1.5em;
        }
      }

      mat-card-content {
        flex: 1;
      }

      mat-card-actions {
        margin-top: auto;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}`;

const CSS_DATA = `
.container-item{
  width: 100%;
  height:100%;
  .name{
    margin:8px 0;
    font-size: 0.9em;
  }
  .email,
  .domain,
  .phone,
  .body,
  .website{
    font-size: 0.7em;
    display: flex;
    align-items: center;
    color:#4b4b4b;
    mat-icon{
      padding-right:8px;
    }
    span{
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .mat-icon{
    font-size:18px;
    height: 18px;;
  }
}`;

const APP_MODULE = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions } from 'ngx-highlightjs';
import { APP_CONFIG, ONTIMIZE_PROVIDERS, OntimizeWebModule } from 'ontimize-web-ngx';
import { OGalleryModule } from 'ontimize-web-ngx-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CONFIG } from './app.config';
import { RickAndMortyService } from './shared/services/rickandmortyapi/rickandmorty.service';
import { RickAndMortyResponseAdapter } from './shared/services/rickandmortyapi/rickandmorty-response.adapter';
import { RickAndMortyRequestArgumentsAdapter } from './shared/services/rickandmortyapi/rickandmorty-request-adapter';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OntimizeWebModule,
    AppRoutingModule,
    HighlightModule,
    OGalleryModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    { provide: 'rickandmorty', useValue: RickAndMortyService },
    RickAndMortyResponseAdapter,
    RickAndMortyRequestArgumentsAdapter,
    },
    ...ONTIMIZE_PROVIDERS
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

`;


const RICKANDMORTY_SERVICE = `
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

    // pageable
    if (pageable) {
      const paginationContext = this.getPaginationContext();
      page = paginationContext.pageNumber ?? 0;
    }

    const queryParamsString = ((Util.isDefined(filter) && !Util.isObjectEmpty(filter)) ? (queryParamsToString + '&') : '?') + (page ? 'page=' + page : '');

    let url = \`\${this.urlBase}\${this.path}\${queryParamsString}\`;

    return this.doRequest({
      method: 'GET',
      url: url,
      options: {}
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
   * @param obj An object with key-value pairs representing the search filters
   * @returns A query string formatted for use in a URL
   */
  public toQueryParams(obj: Record<string, any>): string {
    const params = Object.entries(obj)
      .filter(([_, value]) => !!value)
      .map(([key, value]) => {
        const cleanValue = value.replace(/%/g, '');
        return \`\${encodeURIComponent(key)}=\${encodeURIComponent(cleanValue)}\`;
      })
      .join('&');
    return \`?\${params}\`;
  }

}
`;

const RICKANDMORTY_SERVICE_RESPONSE = `
import { HttpHeaders } from "@angular/common/http";
import { ServiceResponse } from "ontimize-web-ngx";

export class RickAndMortyServiceResponse implements ServiceResponse {
  public code: number;
  public message: string;
  public sqlTypes: { [key: string]: number; };
  public startRecordIndex: number;
  public totalQueryRecordsNumber: number;
  public data: any;

  constructor(
    public status: number,
    public statusText: string,
    public headers: HttpHeaders,
    public ok: boolean,
    public body: any
  ) {
    this.data = body.results;
    if (body.info) {
      this.totalQueryRecordsNumber = body.info.count;
      this.startRecordIndex = 0;
    }


    if (this.status >= 200 || this.status < 300) {
      this.code = 0;
    } else if (this.status === 404) {
      this.code = 3;
    } else {
      this.code = 1;
    }
    this.message = this.statusText;

  }

  isSuccessful(): boolean {
    return this.status >= 200 || this.status < 300;
  }

  isFailed(): boolean {
    return this.status > 300;
  }

  isUnauthorized(): boolean {
    return this.status === 403;
  }

}

`
const RICKANDMORTY_RESPONSE_INTERFACE = `
import { BaseResponse } from "ontimize-web-ngx";

export interface IRickAndMortyResponse extends BaseResponse {

  info?: PageInfo;
  results?: any;
}

interface PageInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;

}

`

const RICKANDMORTY_RESPONSE_ADAPTER = `
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IServiceResponseAdapter } from "ontimize-web-ngx";
import { RickAndMortyServiceResponse } from "./rickandmorty-service.response";

@Injectable()
export class RickAndMortyResponseAdapter implements IServiceResponseAdapter<RickAndMortyServiceResponse> {
  context: any;
  adaptError(httpError: HttpErrorResponse) {
    return httpError.error.error;
  }

  adapt(resp: HttpResponse<any>): RickAndMortyServiceResponse {
    let code = 1;
    let data = [];

    // Adapt the data received from the service
    if (resp.body) {
      code = 0;
      if (resp.body.results) {
        data = resp.body.results;

      } else {
        data = [resp.body];
      }
    }

    // // Create RickAndMorty service response with the data adapted
    return new RickAndMortyServiceResponse(
      resp.status,
      resp.statusText,
      resp.headers,
      resp.ok,
      resp.body
    );
  }
}
`;
const RICKANDMORTY_REQUEST_ADAPTER = `

import { Injectable } from '@angular/core';
import { BaseRequestArgument, Expression, FilterExpressionUtils, IBaseRequestArgument, Util } from 'ontimize-web-ngx';


@Injectable()
export class RickAndMortyRequestArgumentsAdapter extends BaseRequestArgument implements IBaseRequestArgument {
  parseQueryParameters(params: any) {
    let queryargs = [params.filter, params.columns, params.entity, params.sqlTypes];

    const { filter, columns } = params;
    queryargs[0] = this.deCompose(filter, columns, {});
    return queryargs;
  }

  deCompose(expresion, columns: Array<string>, kv: Object) {
    const basicExpresion: Expression = expresion[FilterExpressionUtils.BASIC_EXPRESSION_KEY];
    const filterExpresion: Expression = expresion[FilterExpressionUtils.FILTER_EXPRESSION_KEY];

    let decomposedExpresion = kv;
    if (Util.isDefined(basicExpresion)) {
      decomposedExpresion = this.deComposeExpresion(basicExpresion, columns, kv);
    }

    /* Required for column filtering which is currently disabled */
    if (Util.isDefined(filterExpresion)) {
      decomposedExpresion = this.deComposeExpresion(filterExpresion, columns, decomposedExpresion);
    }
    return decomposedExpresion;
  }

  deComposeExpresion(expresion: any, columns: Array<string>, kv: Object) {
    if (FilterExpressionUtils.instanceofExpression(expresion)) {
      if (typeof expresion.lop !== 'string') {
        kv = this.deComposeExpresion(expresion.lop, columns, kv);
        return this.deComposeExpresion(expresion.rop, columns, kv);
      } else {
        return Object.assign(kv, { [expresion.lop]: expresion.rop });
      }
    }
  }
}

`;


const
  HTML_TS_HIBRID = `
  data =  ${JSON.stringify(FAKE_DATAHYBRID)};
`;

export class GridUtils {

  public static HTML_DATA_GRID = HTML_DATA_GRID;
  public static HTML_DATA_GRID_FIXED = HTML_DATA_GRID_FIXED;
  public static HTML_DATA_GRID_HYBRID = HTML_DATA_GRID_HYBRID;

  public static getData(type) {
    switch (type) {
      case
        'o-grid-hybrid':
        return FAKE_DATAHYBRID;
      default:
        return FAKE_USERS;
    }
  }

  static getCSS(type: string): any {
    switch (type) {

      case 'o-grid-hybrid':
        return '';
      case 'o-grid-basic':
        return CSS_GRID_BASIC;
      default:
        return CSS_DATA;

    }
  }

  public static getHtml(key: string, table: any, data: any) {
    let tpl = '';
    switch (key) {
      case 'o-grid-basic':
        tpl = HTML_DATA_GRID;
        break;
      case 'o-grid-fixed':
        tpl = HTML_DATA_GRID_FIXED;
        break;

    }
    return tpl;
  }

  public static getFiles(key: string) {
    let result: any = {
      'scss': {
        'data': GridUtils.getCSS(key)
      },
      'typescript': {
        'data': GridUtils.getTypescript(key)
      }
    };

    if (key === 'o-grid-basic' || key === 'o-grid-fixed') {
      let files = [];
      files.push({
        'label': 'app.module.ts',
        'type': 'typescript',
        'data': APP_MODULE
      });
      files.push({
        'label': 'rickandmorty.service.ts',
        'type': 'typescript',
        'data': RICKANDMORTY_SERVICE
      });
      files.push({
        'label': 'rickandmorty-request-adapter.ts',
        'type': 'typescript',
        'data': RICKANDMORTY_REQUEST_ADAPTER
      });
      files.push({
        'label': 'rickandmorty-response.adapter.ts',
        'type': 'typescript',
        'data': RICKANDMORTY_RESPONSE_ADAPTER
      });
      files.push({
        'label': 'rickandmorty-response.interface.ts',
        'type': 'typescript',
        'data': RICKANDMORTY_RESPONSE_INTERFACE
      });
      files.push({
        'label': 'rickandmorty-service.response.ts',
        'type': 'typescript',
        'data': RICKANDMORTY_SERVICE_RESPONSE
      });
      result['files'] = files;
    }

    return result;
  }

  public static getTypescript(key: string) {
    let code = '';
    switch (key) {
      case 'o-grid-basic':
      case 'o-grid-fixed':
        code = '';
        break;
      case 'o-grid-hybrid':
        code = HTML_TS_HIBRID;
        break;
    }
    return code;
  }

  public static getTypeHtml(key: string) {
    let code = '';
    switch (key) {
      case 'o-grid-basic':
        code = HTML_DATA_GRID;
        break;
      case 'o-grid-fixed':
        code = HTML_DATA_GRID_FIXED;
        break;
      case 'o-grid-hybrid':
        code = HTML_DATA_GRID_HYBRID;
        break;
    }
    code = GridUtils.replaceHtml(code, key)
    return code;
  }

  public static replaceHtml(html: string, grid?: any) {
    if (grid) {
      html = html.replace('{title}', grid.title || '')
        .replace('{columns}', grid.cols)
        .replace('{orderable}', grid.showSort)
        .replace('{quickfilter}', grid.quickFilter)
        .replace('{queryRows}', grid.queryRows)
        .replace('{controls}', grid.controls)
        .replace('{showPageSize}', grid.showPageSize)
        .replace('{sortColumn}', grid.sortColumn ? grid.sortColumn : '')
        .replace('{refreshButton}', grid.refreshButton)
        .replace('{paginationControls}', grid.paginationControls)
        .replace('{fixedHeader}', grid.fixedHeader)
        .replace('{guttersize}', grid.gutterSize);
    }
    return html;
  }

}