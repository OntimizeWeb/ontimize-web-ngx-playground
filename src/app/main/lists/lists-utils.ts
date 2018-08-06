export class ListsUtils {

  public static replaceHtml(html: string, list?: any, itemData?: any) {
    if (list) {
      html = html.replace('{title}', list.title || '')
        .replace('{quickFilter}', list.quickFilter)
        .replace('{refreshButton}', list.refreshButton)
        .replace('{insertButton}', list.insertButton)
        .replace('{selectable}', list.selectable)
        .replace('{dense}', list.dense || false)
        .replace('{detailButtonInRow}', list.detailButtonInRow)
        .replace('{detailButtonInRowIcon}', list.detailButtonInRowIcon || '')
        .replace('{editButtonInRow}', list.editButtonInRow)
        .replace('{editButtonInRowIcon}', list.editButtonInRowIcon || '')
        .replace('{rowHeight}', list.rowHeight || '')
        .replace('{showImage}', itemData.showImage)
        .replace('{actionText1}', itemData.actionText1)
        .replace('{actionText2}', itemData.actionText2);
    }
    if (itemData) {
      html = html.replace('{collapsible}', itemData.collapsible)
        .replace('{collapsed}', itemData.collapsed);

      if (itemData.hasOwnProperty('icon')) {
        html = html.replace('{icon}', itemData.icon)
          .replace('{iconPosition}', itemData.iconPosition || '');
      } else {
        html = html.replace('icon="{icon}"', '')
          .replace(' icon-position="{iconPosition}"', '');
      }

      if (itemData.action1 && itemData.action1.length) {
        html = html.replace('{action1}', itemData.action1);
      } else {
        html = html.replace('action-1-text="{action1}"', '');
      }

      if (itemData.action2 && itemData.action2.length) {
        html = html.replace('{action2}', itemData.action2);
      } else {
        html = html.replace('action-2-text="{action2}"', '');
      }

      if (!itemData.image) {
        html = html.replace('image="{{ row.image }}"', '');
      }

      if (!itemData.avatar) {
        html = html.replace('avatar="{{ row.thumbnailUrl }}"', '');
      }
    }
    return html;
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
    }
    return typescriptCode;
  }

  public static getListData(itemNumber?: number): Array<any> {
    const result = [];
    const arrayLength = itemNumber || 3;
    for (let i = 0; i < arrayLength; i++) {
      result.push(FAKE_USERS_LIST[i]);
    }
    return result;
  }
}

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
