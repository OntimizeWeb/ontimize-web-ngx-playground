import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ListsUtils } from '../lists-utils';

const LIST_ITEM_TEXT_HTML_DATA = `
<o-list #list keys="id" columns="id;name;username;email" [static-data]="getUsers()"
  title="{title}" quick-filter="{quickFilter}" quick-filter-columns="name;username;email"
  refresh-button="{refreshButton}" insert-button="{insertButton}" delete-button="{deleteButton}"
  selectable="{selectable}" detail-button-in-row="{detailButtonInRow}"
  detail-button-in-row-icon="{detailButtonInRowIcon}" edit-button-in-row="{editButtonInRow}"
  edit-button-in-row-icon="{editButtonInRowIcon}" detail-mode="none" pagination-controls="{paginationControls}"
  page-size-options="5;10" insert-button-position="{insertButtonPosition}" show-buttons-text="{showTextButton}">

  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-text #item icon="{icon}" icon-position="{iconPosition}" title="{{ row.username }}"
      primary-text="{{ row.name }}" secondary-text="{{ row.email }}" (icon-action)="addToFavorites(row, item)">
    </o-list-item-text>
  </o-list-item>

</o-list>
`;

const LIST_ITEM_TEXT_TS_DATA = `
  addToFavorites(itemData, avatarItem) {
    if (avatarItem.icon === 'star') {
      avatarItem.icon = 'star_border';
    } else {
      avatarItem.icon = 'star';
    }
  }
`;

@Component({
  selector: 'list-item-text',
  templateUrl: './list-item-text.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ListItemTextComponent {

  iconPosition: string = 'right';
  protected staticData = ListsUtils.getListData(10);

  @ViewChild('iconToggle')
  iconToggle: any;
  @ViewChild('itemIcon')
  itemIcon: any;
  @ViewChild('list')
  list: any;
  html: string;
  insertButtonPosition = 'bottom';

  files = {
    'html': {
      'data': LIST_ITEM_TEXT_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': LIST_ITEM_TEXT_TS_DATA
    }
  };

  constructor() { }

  addToFavorites(itemData, avatarItem) {
    if (avatarItem.icon === 'star') {
      avatarItem.icon = 'star_border';
    } else {
      avatarItem.icon = 'star';
    }
  }

  getStaticData() {
    return this.staticData;
  }

  updateCodeValue(key: string, value) {
    let htmlData: string = LIST_ITEM_TEXT_HTML_DATA;
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

    if (this.iconToggle.checked) {
      itemData.icon = (this.itemIcon && this.itemIcon.nativeElement.value) ?
        this.itemIcon.nativeElement.value : '';
    }

    this.html = ListsUtils.replaceHtml(LIST_ITEM_TEXT_HTML_DATA, list, itemData);
  }

}
