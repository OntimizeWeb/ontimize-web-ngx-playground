import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ListsUtils } from '../lists-utils';

const LIST_ITEM_AVATAR_HTML_DATA = `
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

const LIST_ITEM_AVATAR_TS_DATA = `

`;

@Component({
  selector: 'list-item-avatar',
  templateUrl: './list-item-avatar.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ListItemAvatarComponent {

  iconPosition: String = 'right';

  @ViewChild('iconToggle')
  iconToggle: any;
  @ViewChild('itemIcon')
  itemIcon: any;

  files = {
    'html': {
      'data': LIST_ITEM_AVATAR_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': undefined
    }
  };

  getStaticData() {
    return ListsUtils.getListData(5);
  }

  addToFavorites(itemData, avatarItem) {
    if (avatarItem.icon === 'star') {
      avatarItem.icon = 'star_border';
    } else {
      avatarItem.icon = 'star';
    }
  }

  onShowSource(list?: any, exampleComp?: any) {
    const itemData: any = {
      iconPosition: this.iconPosition
    };

    if (this.iconToggle.checked) {
      itemData.icon = (this.itemIcon && this.itemIcon.nativeElement.value) ?
        this.itemIcon.nativeElement.value : '';
    }

    exampleComp.html = ListsUtils.replaceHtml(LIST_ITEM_AVATAR_HTML_DATA, list, itemData);

  }

}
