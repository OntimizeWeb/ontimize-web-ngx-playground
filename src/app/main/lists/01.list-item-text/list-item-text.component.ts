import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ListsUtils } from '../lists-utils';

const LIST_ITEM_TEXT_HTML_DATA = `
<o-list #list keys="id" columns="id;name;username;email" [static-data]="getUsers()"
  title="{title}" quick-filter="{quickFilter}" quick-filter-columns="name;username;email"
  refresh-button="{refreshButton}" insert-button="{insertButton}" insert-button-position="{insertButtonPosition}"
  insert-button-floatable="{insertButtonFloatable}" delete-button="{deleteButton}"
  selectable="{selectable}" dense="{dense}" detail-button-in-row="{detailButtonInRow}"
  detail-button-in-row-icon="{detailButtonInRowIcon}" edit-button-in-row="{editButtonInRow}"
  edit-button-in-row-icon="{editButtonInRowIcon}" detail-mode="none">

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

  iconPosition: String = 'right';
  protected staticData = ListsUtils.getListData(5);

  @ViewChild('iconToggle')
  iconToggle: any;
  @ViewChild('itemIcon')
  itemIcon: any;
  @ViewChild('insertButtonFloatableToggle')
  insertButtonFloatableToggle: any;
  @ViewChild('insertButtonPositionToggle')
  insertButtonPositionToggle: any;
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

  onShowSource(list?: any, exampleComp?: any) {
    const itemData: any = {
      iconPosition: this.iconPosition
    };

    if (this.iconToggle.checked) {
      itemData.icon = (this.itemIcon && this.itemIcon.nativeElement.value) ?
        this.itemIcon.nativeElement.value : '';
    }

    itemData.insertButtonPosition = this.insertButtonPositionToggle.checked ? 'top' : 'bottom';
    itemData.insertButtonFloatable = this.insertButtonFloatableToggle.checked;

    exampleComp.html = ListsUtils.replaceHtml(LIST_ITEM_TEXT_HTML_DATA, list, itemData);
  }

}
