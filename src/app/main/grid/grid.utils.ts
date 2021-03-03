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
    'thumbnailUrl': 'http://placehold.it/100/30ac17',
    'image': 'http://placehold.it/600/30ac17',
    'body': `laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora
    quo necessitatibus\ndolor
    quam autem quasi\nreiciendis et nam sapiente accusantium`
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
    'thumbnailUrl': 'http://placehold.it/100/dff9f6',
    'image': 'http://placehold.it/600/dff9f6',
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
    'thumbnailUrl': 'http://placehold.it/100/1941e9',
    'image': 'http://placehold.it/600/1941e9',
    'body': `quia molestiae reprehenderit quasi aspernatur\naut expedita
    occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe
     quia accusamus maiores nam est\ncum et ducimus et vero voluptates
      excepturi deleniti ratione`
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
    'thumbnailUrl': 'http://placehold.it/100/39e985',
    'image': 'http://placehold.it/600/39e985',
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
    'thumbnailUrl': 'http://placehold.it/100/7735a',
    'image': 'http://placehold.it/600/7735a',
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
    'thumbnailUrl': 'http://placehold.it/100/aef555',
    'image': 'http://placehold.it/600/aef555',
    'body': `laudantium enim quasi est quidem magnam voluptate´
    ipsam eos\ntempora quo necessitatibus\ndolor quam autem
    quasi\nreiciendis et nam sapiente accusantium`
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
    'thumbnailUrl': 'http://placehold.it/100/c672a0',
    'image': 'http://placehold.it/600/c672a0',
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
    'thumbnailUrl': 'http://placehold.it/100/412ffd',
    'image': 'http://placehold.it/600/412ffd',
    'body': `quia molestiae reprehenderit quasi aspernatur\naut
    expedita occaecati aliquam eveniet laudantium\nomnis quibusdam
    delectus saepe quia accusamus maiores nam est\ncum et ducimus
    et vero voluptates excepturi deleniti ratione`
  },
  {
    'id': 9,
    'name': 'Glenna Reichert',
    'username': 'Delphine',
    'email': 'Chaim_McDermott@dana.io',
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
    'thumbnailUrl': 'http://placehold.it/100/15c072',
    'image': 'http://placehold.it/600/15c072',
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
    'thumbnailUrl': 'http://placehold.it/100/e65eee',
    'image': 'http://placehold.it/600/e65eee',
    'body': `harum non quasi et ratione\ntempore iure ex voluptates in
      ratione\nharum architecto fugit inventore cupiditate\nvoluptates
       magni quo et`
  }];

const FAKE_DATAHYBRID = [
  { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
  { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
  { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
  { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
];

const HTML_DATA_GRID = `
  <o-grid #grid attr="grid" title="{title}" [static-data]="getStaticData()" columns="id;name;username;email;companyname;phone;website"
    keys="id" cols="{columns}" query-rows="{queryRows}" show-page-size="{showPageSize}" page-size-options="4;8;16"
    orderable="{orderable}" quick-filter="{quickfilter}" grid-item-height="1:3" sortable-columns="name;email"
    sort-column="{sortColumn}" controls="{controls}" refresh-button="{refreshButton}" insert-button="{insertButton}"
    pagination-controls="{paginationControls}" gutter-size="{gutterSize}px" fixed-header="yes"  [ngStyle]="{'height':'600px'}" >
    <o-grid-item *ngFor="let list of grid.dataArray">
      <o-column layout-padding class="container-item">
        <img [src]="list.thumbnailUrl" style="margin-top:8px">
        <h4>{{ list.name }}</h4>
        <div class="phone">
          <mat-icon>phone</mat-icon> <span> {{ list.phone }} </span>
        </div>
        <div class="email">
          <mat-icon>email</mat-icon> <span>{{ list.email }} </span>
        </div>
        <div class="domain">
          <mat-icon>domain</mat-icon> <span> {{ list.companyname }} </span>
        </div>
        <div class="website">
          <mat-icon>website</mat-icon> <span> {{ list.website }} </span>
        </div>
        <div class="body">
          {{list.body}}
        </div>
      </o-column>
    </o-grid-item>
  </o-grid>
`;

const HTML_DATA_GRID_FIXED = `
<o-grid #grid attr="grid"  title="{title}" [static-data]="getStaticData()" columns="id;name;username;email;companyname"
keys="id" [fixed-header]="{fixedHeader}" style="height:'{height}px'" pagination-controls="yes" query-rows="8">
  <o-grid-item *ngFor="let list of grid.dataArray">
    <o-column layout-padding class="container-item">
      <img [src]="list.thumbnailUrl" style="margin-top:8px">
      <div class="name"><b>{{ list.name }}</b></div>
      <div class="phone">
        <mat-icon>phone</mat-icon> <span> {{ list.phone }} </span>
      </div>
      <div class="email">
        <mat-icon>email</mat-icon> <span>{{ list.email }} </span>
      </div>
      <div class="domain">
        <mat-icon>domain</mat-icon> <span> {{ list.companyname }} </span>
      </div>
      <div class="website">
        <mat-icon>website</mat-icon> <span> {{ list.website }} </span>
      </div>
    </o-column>
  </o-grid-item>
</o-grid>
`;

const HTML_DATA_GRID_HYBRID = `
 <o-grid #grid attr="grid" [static-data]="getStaticData())" columns="text;cols;rows;color" cols="4"
grid-item-height="100px" controls="no" gutter-size="0">
  <o-grid-item *ngFor="let list of grid.dataArray" [colspan]="list.cols" [rowspan]="list.rows">
    <div [style.background]="list.color" fxFill>
      {{list.text}}
    </div>
  </o-grid-item>
</o-grid>`;

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

const
  HTML_TS = `
getStaticData() {
  return ${JSON.stringify(FAKE_USERS)};
}
`;

const
  HTML_TS_HIBRID = `
getStaticData() {
  return ${JSON.stringify(FAKE_DATAHYBRID)};
}
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
      //,
      // 'html': {
      //   'data': GridUtils.getTypeHtml(key)
      // },
    };
    return result;
  }

  public static getTypescript(key: string) {
    let code = '';
    switch (key) {
      case 'o-grid-basic':
      case 'o-grid-fixed':
        code = HTML_TS;
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