import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ListsUtils } from '../lists-utils';
import { ExampleComponent } from '../../../../shared/example/example.component';

const LIST_ITEM_AVATAR_HTML_DATA = `
<o-list #list keys="id" columns="id;name;username;email" [static-data]="getUsers()"
  title="{title}" quick-filter="{quickFilter}" quick-filter-columns="name;username;email"
  refresh-button="{refreshButton}" insert-button="{insertButton}" delete-button="{deleteButton}"
  selectable="{selectable}" detail-button-in-row="{detailButtonInRow}"
  detail-button-in-row-icon="{detailButtonInRowIcon}" edit-button-in-row="{editButtonInRow}"
  edit-button-in-row-icon="{editButtonInRowIcon}" detail-mode="none">

  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-avatar #tem icon="{icon}" avatar="{{ row.thumbnailUrl }}" title="{{ row.username }}" primary-text="{{ row.name }}"
      secondary-text="{{ row.email }}" (icon-action)="addToFavorites(row, item)">
    </o-list-item-avatar>
  </o-list-item>

</o-list>
`;

const LIST_ITEM_AVATAR_TS_DATA = `
  addToFavorites(itemData, avatarItem) {
    if (avatarItem.icon === 'star') {
      avatarItem.icon = 'star_border';
    } else {
      avatarItem.icon = 'star';
    }
  }
`;

@Component({
  selector: 'list-item-avatar',
  templateUrl: './list-item-avatar.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ListItemAvatarComponent {

  iconPosition: string = 'right';
  protected staticData = ListsUtils.getListData(5);
  html: string;

  @ViewChild('listTitle')
  listTitle: any;
  @ViewChild('refreshButtonToggle')
  refreshButtonToggle: any;
  @ViewChild('insertButtonToggle')
  insertButtonToggle: any;
  @ViewChild('selectableToggle')
  selectableToggle: any;
  @ViewChild('editButtonInRowToggle')
  editButtonInRowToggle: any;
  @ViewChild('detailButtonInRowToggle')
  detailButtonInRowToggle: any;
  @ViewChild('iconToggle')
  iconToggle: any;
  @ViewChild('itemIcon')
  itemIcon: any;
  @ViewChild('list')
  list: any;

  files = {
    'html': {
      'data': LIST_ITEM_AVATAR_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': LIST_ITEM_AVATAR_TS_DATA
    }
  };

  constructor() { }

  getStaticData() {
    return this.staticData;
  }

  addToFavorites(itemData, avatarItem) {
    if (avatarItem.icon === 'star') {
      avatarItem.icon = 'star_border';
    } else {
      avatarItem.icon = 'star';
    }
  }

  updateCodeValue(key: string, value) {
    let htmlData: string = LIST_ITEM_AVATAR_HTML_DATA;
    const itemData: any = {
      iconPosition: this.iconPosition
    };
    if (this.iconToggle.checked) {
      itemData.icon = (this.itemIcon && this.itemIcon.nativeElement.value) ?
        this.itemIcon.nativeElement.value : '';
    }
    htmlData = htmlData.replace("{" + key + "}", value);
    this.html = ListsUtils.replaceHtml(htmlData, this.list, itemData);
  }

  onShowSource(list?: any, exampleComp?: any) {
    const itemData: any = {
      iconPosition: this.iconPosition
    };

    list.title = this.listTitle.nativeElement.value;
    list.refreshButton = this.refreshButtonToggle.checked;
    list.insertButton = this.insertButtonToggle.checked;
    list.selectable = this.selectableToggle.checked;

    list.editButtonInRow = this.editButtonInRowToggle.checked;
    list.detailButtonInRow = this.detailButtonInRowToggle.checked;

    if (this.iconToggle.checked) {
      itemData.icon = (this.itemIcon && this.itemIcon.nativeElement.value) ?
        this.itemIcon.nativeElement.value : '';
    }

    this.html = ListsUtils.replaceHtml(LIST_ITEM_AVATAR_HTML_DATA, list, itemData);
  }
}
