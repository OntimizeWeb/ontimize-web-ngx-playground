export class ListsUtils {

  public static getHtml(key: string, list?: any, itemData?: any) {
    let tpl = '';
    switch (key) {
      case 'o-list-item-text':
        tpl = LIST1_HTML_DATA;
        break;
      case 'o-list-item-avatar':
        tpl = LIST2_HTML_DATA;
        break;
      case 'o-list-item-card':
        tpl = LIST3_HTML_DATA;
        break;
      case 'o-list-item-card-image':
        tpl = LIST4_HTML_DATA;
        break;
      default:
        tpl = 'no-data';
        break;
    }
    if (list) {
      tpl = tpl.replace('{title}', list.title || '')
        .replace('{quickFilter}', list.quickFilter)
        .replace('{refreshButton}', list.refreshButton)
        .replace('{insertButton}', list.insertButton)
        .replace('{selectable}', list.selectable)
        .replace('{dense}', list.dense || false)
        .replace('{detailButtonInRow}', list.detailButtonInRow)
        .replace('{detailButtonInRowIcon}', list.detailButtonInRowIcon || '')
        .replace('{editButtonInRow}', list.editButtonInRow)
        .replace('{editButtonInRowIcon}', list.editButtonInRowIcon || '')
        .replace('{rowHeight}', list.rowHeight || '');
    }
    if (itemData) {

      tpl = tpl.replace('{collapsible}', itemData.collapsible)
        .replace('{collapsed}', itemData.collapsed);

      if (itemData.hasOwnProperty('icon')) {
        tpl = tpl.replace('{icon}', itemData.icon)
          .replace('{iconPosition}', itemData.iconPosition || '');
      } else {
        tpl = tpl.replace('icon="{icon}"', '')
          .replace(' icon-position="{iconPosition}"', '');
      }

      if (itemData.action1 && itemData.action1.length) {
        tpl = tpl.replace('{action1}', itemData.action1);
      } else {
        tpl = tpl.replace('action-1-text="{action1}"', '');
      }

      if (itemData.action2 && itemData.action2.length) {
        tpl = tpl.replace('{action2}', itemData.action2);
      } else {
        tpl = tpl.replace('action-2-text="{action2}"', '');
      }

      if (!itemData.image) {
        tpl = tpl.replace('image="{{ row.image }}"', '');
      }

      if (!itemData.avatar) {
        tpl = tpl.replace('avatar="{{ row.thumbnailUrl }}"', '');
      }
    }
    return tpl;
  }

  public static getFiles(key: string, list?: any) {
    return {
      files: [{
        'type': 'scss',
        'data': ''
      }, {
        'type': 'typescript',
        'data': ListsUtils.getTypescript(key)
      }, {
        'type': 'html',
        'data': ' '
      }]
    };
  }

  public static getTypescript(key: string) {
    let typescriptCode = '';
    switch (key) {

      case 'o-list-item-avatar':
        typescriptCode += `
          addToFavorites(itemData, item) {
            if (item.icon === 'star') {
              item.icon = 'star_border';
            } else {
              item.icon = 'star';
            }
          }
        `;
        break;
      case 'o-list-item-text':

        typescriptCode += `

          getUsers() {
            return [
              {
                'id': 1,
                'name': 'Leanne Graham',
                'username': 'Bret',
                'email': 'Sincere@april.biz',
                'street': 'Kulas Light',
                'phone': '1-770-736-8031 x56442',
                'thumbnailUrl': 'http://placehold.it/150/30ac17',
                'image': 'http://placehold.it/600/30ac17',
                'body': \`laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora
                quo necessitatibus\ndolor
                quam autem quasi\nreiciendis et nam sapiente accusantium\`
              },
              {
                'id': 2,
                'name': 'Ervin Howell',
                'username': 'Antonette',
                'email': 'Shanna@melissa.tv',
                'street': 'Victor Plains',
                'phone': '010-692-6593 x09125',
                'thumbnailUrl': 'http://placehold.it/150/dff9f6',
                'image': 'http://placehold.it/600/dff9f6',
                'body': \`est natus enim nihil est dolore omnis voluptatem
                numquam\net omnis occaecati quod ullam at\nvoluptatem error
                expedita pariatur\nnihil sint nostrum voluptatem reiciendis et\`
              },
              {
                'id': 3,
                'name': 'Clementine Bauch',
                'username': 'Samantha',
                'email': 'Nathan@yesenia.net',
                'street': 'Douglas Extension',
                'phone': '1-463-123-4447',
                'thumbnailUrl': 'http://placehold.it/150/1941e9',
                'image': 'http://placehold.it/600/1941e9',
                'body': \`quia molestiae reprehenderit quasi aspernatur\naut expedita
                occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe
                quia accusamus maiores nam est\ncum et ducimus et vero voluptates
                  excepturi deleniti ratione\`
              },
              {
                'id': 4,
                'name': 'Patricia Lebsack',
                'username': 'Karianne',
                'email': 'Julianne.OConner@kory.org',
                'street': 'Hoeger Mall',
                'phone': '493-170-9623 x156',
                'thumbnailUrl': 'http://placehold.it/150/39e985',
                'image': 'http://placehold.it/600/39e985',
                'body': \`non et atque\noccaecati deserunt quas accusantium unde odit
                nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net
                qui rerum deleniti ut occaecati\`
              },
              {
                'id': 5,
                'name': 'Chelsey Dietrich',
                'username': 'Kamren',
                'email': 'Lucio_Hettinger@annie.ca',
                'street': 'Skiles Walks',
                'phone': '(254)954-1289',
                'thumbnailUrl': 'http://placehold.it/150/7735a',
                'image': 'http://placehold.it/600/7735a',
                'body': \`harum non quasi et ratione\ntempore iure ex voluptates
                in ratione\nharum architecto fugit inventore cupiditate\nvoluptates
                magni quo et\`
              }
            ];
          }
        `;
        break;
      case 'o-list-item-card':

        break;
      case 'o-list-item-card-image':
        break;
      default:
        break;
    }
    return typescriptCode;
  }

  public static getUsers() {
    return FAKE_USERS_LIST;
  }
}

const LIST1_HTML_DATA = `
<o-list #list fxFill keys="id" query-on-init="true" pageable="no"
  columns="id;name;username;email;street;phone" quick-filter-columns="name;username"
  [static-data]="getUsers()" title="{title}" quick-filter="{quickFilter}"
  refresh-button="{refreshButton}" insert-button="{insertButton}" selectable="{selectable}"
  dense="{dense}" detail-button-in-row="{detailButtonInRow}"
  detail-button-in-row-icon="{detailButtonInRowIcon}"
  edit-button-in-row="{editButtonInRow}" edit-button-in-row-icon="{editButtonInRowIcon}">

  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-text #item title="{{row.username}}"
      secondary-text="{{ row.body }}"> (icon-action)="addToFavorites(row, item)"
      icon="{icon}" icon-position="{iconPosition}">
    </o-list-item-text>
  </o-list-item>

</o-list>
`;

const LIST2_HTML_DATA = `
<o-list #list fxFill keys="id" query-on-init="true" pageable="no"
  columns="id;name;username;email;street;phone" quick-filter-columns="name;username"
  [static-data]="getUsers()" title="{title}" quick-filter="{quickFilter}"
  refresh-button="{refreshButton}" insert-button="{insertButton}" selectable="{selectable}"
  dense="{dense}" detail-button-in-row="{detailButtonInRow}"
  detail-button-in-row-icon="{detailButtonInRowIcon}"
  edit-button-in-row="{editButtonInRow}" edit-button-in-row-icon="{editButtonInRowIcon}">

  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-avatar #item avatar="{{ row.thumbnailUrl }}"
      title="{{row.name}}" secondary-text="{{ row.body }}"
      (icon-action)="addToFavorites(row, item)" icon="{icon}">
    </o-list-item-avatar>
  </o-list-item>

</o-list>
`;

const LIST3_HTML_DATA = `
<o-list #list fxFill keys="id" query-on-init="true" pageable="no"
  columns="id;name;username;email;street;phone" quick-filter-columns="name;username"
  [static-data]="getUsers()" title="{title}" quick-filter="{quickFilter}"
  refresh-button="{refreshButton}" insert-button="{insertButton}" selectable="no"
  dense="{dense}" detail-button-in-row="{detailButtonInRow}"
  detail-button-in-row-icon="{detailButtonInRowIcon}"
  edit-button-in-row="{editButtonInRow}" edit-button-in-row-icon="{editButtonInRowIcon}"
  row-height="{rowHeight}">

  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-card #item
      title="{{row.username}}" subtitle="{{row.name}}" image="{{ row.image }}"
      action-1-text="{action1}" action-2-text="{action2}"
      (action-1)="onAction1()" (action-2)="onAction2()">
    </o-list-item-card>
  </o-list-item>

<o-list>
`;

const LIST4_HTML_DATA = `
<o-list #list fxFill keys="id" query-on-init="true" pageable="no"
  columns="id;name;username;email;street;phone" quick-filter-columns="name;username"
  [static-data]="getUsers()" title="{title}" quick-filter="{quickFilter}"
  refresh-button="{refreshButton}" insert-button="{insertButton}" selectable="no"
  detail-button-in-row="no" row-height="large">

  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-card-image #item title="{{row.username}}" subtitle="{{row.name}}"
      content="{{ row.body }}" avatar="{{ row.thumbnailUrl }}" image="{{ row.image }}"
      action-1-text="{action1}" action-2-text="{action2}"
      (action-1)="onAction1()" (action-2)="onAction2()"
      icon="{icon}" (icon-action)="onIconAction()"
      collapsible="{collapsible}" collapsed="{collapsed}">
    </o-list-item-card-image>
  </o-list-item>

<o-list>
`;

const FAKE_USERS_LIST = [
  {
    'id': 1,
    'name': 'Leanne Graham',
    'username': 'Bret',
    'email': 'Sincere@april.biz',
    'street': 'Kulas Light',
    'suite': 'Apt. 556',
    'city': 'Gwenborough',
    'zipcode': '92998-3874',
    'lat': '-37.3159',
    'lng': '81.1496',
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'companyname': 'Romaguera-Crona',
    'companycatchPhrase': 'Multi-layered client-server neural-net',
    'companybs': 'harness real-time e-markets',
    'thumbnailUrl': 'http://placehold.it/150/30ac17',
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
    'lat': '-43.9509',
    'lng': '-34.4618',
    'phone': '010-692-6593 x09125',
    'website': 'anastasia.net',
    'companyname': 'Deckow-Crist',
    'companycatchPhrase': 'Proactive didactic contingency',
    'companybs': 'synergize scalable supply-chains',
    'thumbnailUrl': 'http://placehold.it/150/dff9f6',
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
    'lat': '-68.6102',
    'lng': '-47.0653',
    'phone': '1-463-123-4447',
    'website': 'ramiro.info',
    'companyname': 'Romaguera-Jacobson',
    'companycatchPhrase': 'Face to face bifurcated interface',
    'companybs': 'e-enable strategic applications',
    'thumbnailUrl': 'http://placehold.it/150/1941e9',
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
    'lat': '29.4572',
    'lng': '-164.2990',
    'phone': '493-170-9623 x156',
    'website': 'kale.biz',
    'companyname': 'Robel-Corkery',
    'companycatchPhrase': 'Multi-tiered zero tolerance productivity',
    'companybs': 'transition cutting-edge web services',
    'thumbnailUrl': 'http://placehold.it/150/39e985',
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
    'lat': '-31.8129',
    'lng': '62.5342',
    'phone': '(254)954-1289',
    'website': 'demarco.info',
    'companyname': 'Keebler LLC',
    'companycatchPhrase': 'User-centric fault-tolerant solution',
    'companybs': 'revolutionize end-to-end systems',
    'thumbnailUrl': 'http://placehold.it/150/7735a',
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
    'lat': '-71.4197',
    'lng': '71.7478',
    'phone': '1-477-935-8478 x6430',
    'website': 'ola.org',
    'companyname': 'Considine-Lockman',
    'companycatchPhrase': 'Synchronised bottom-line interface',
    'companybs': 'e-enable innovative applications',
    'thumbnailUrl': 'http://placehold.it/150/aef555',
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
    'lat': '24.8918',
    'lng': '21.8984',
    'phone': '210.067.6132',
    'website': 'elvis.io',
    'companyname': 'Johns Group',
    'companycatchPhrase': 'Configurable multimedia task-force',
    'companybs': 'generate enterprise e-tailers',
    'thumbnailUrl': 'http://placehold.it/150/c672a0',
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
    'lat': '-14.3990',
    'lng': '-120.7677',
    'phone': '586.493.6943 x140',
    'website': 'jacynthe.com',
    'companyname': 'Abernathy Group',
    'companycatchPhrase': 'Implemented secondary concept',
    'companybs': 'e-enable extensible e-tailers',
    'thumbnailUrl': 'http://placehold.it/150/412ffd',
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
    'lat': '24.6463',
    'lng': '-168.8889',
    'phone': '(775)976-6794 x41206',
    'website': 'conrad.com',
    'companyname': 'Yost and Sons',
    'companycatchPhrase': 'Switchable contextually-based project',
    'companybs': 'aggregate real-time technologies',
    'thumbnailUrl': 'http://placehold.it/150/15c072',
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
    'lat': '-38.2386',
    'lng': '57.2232',
    'phone': '024-648-3804',
    'website': 'ambrose.net',
    'companyname': 'Hoeger LLC',
    'companycatchPhrase': 'Centralized empowering task-force',
    'companybs': 'target end-to-end models',
    'thumbnailUrl': 'http://placehold.it/150/e65eee',
    'image': 'http://placehold.it/600/e65eee',
    'body': `harum non quasi et ratione\ntempore iure ex voluptates in
      ratione\nharum architecto fugit inventore cupiditate\nvoluptates
       magni quo et`
  }];
