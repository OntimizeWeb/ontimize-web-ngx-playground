import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ListsUtils } from '../lists-utils';

const LIST_ITEM_TEXT_HTML_DATA = `
<o-list #list fxFill keys="id" query-on-init="true" pageable="no"
  columns="id;name;username;email" quick-filter-columns="name;username;email"
  [static-data]="getUsers()" title="{title}" quick-filter="{quickFilter}"
  refresh-button="{refreshButton}" insert-button="{insertButton}" selectable="{selectable}"
  dense="{dense}" detail-button-in-row="{detailButtonInRow}"
  detail-button-in-row-icon="{detailButtonInRowIcon}"
  edit-button-in-row="{editButtonInRow}" edit-button-in-row-icon="{editButtonInRowIcon}">

  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-text #item title="{{row.username}}"
      secondary-text="{{ row.email }}"> (icon-action)="addToFavorites(row, item)"
      icon="{icon}" icon-position="{iconPosition}">
    </o-list-item-text>
  </o-list-item>

</o-list>
`;

const LIST_ITEM_TEXT_TS_DATA = `

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

  files = {
    'html': {
      'data': LIST_ITEM_TEXT_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': undefined
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

    exampleComp.html = ListsUtils.replaceHtml(LIST_ITEM_TEXT_HTML_DATA, list, itemData);
  }

}
