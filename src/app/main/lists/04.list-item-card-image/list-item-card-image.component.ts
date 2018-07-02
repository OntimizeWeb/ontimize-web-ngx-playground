import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ListsUtils } from '../lists-utils';

const LIST_ITEM_CARD_IMAGE_HTML_DATA = `
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

const LIST_ITEM_CARD_IMAGE_TS_DATA = `

`;

@Component({
  selector: 'list-item-card-image',
  templateUrl: './list-item-card-image.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ListItemCardImageComponent {

  iconPosition: String = 'right';

  @ViewChild('iconToggle')
  iconToggle: any;
  @ViewChild('itemIcon')
  itemIcon: any;

  @ViewChild('actionText1')
  actionText1: any;
  @ViewChild('action1Toggle')
  action1Toggle: any;
  @ViewChild('actionText2')
  actionText2: any;
  @ViewChild('action2Toggle')
  action2Toggle: any;
  @ViewChild('actionText12')
  actionText12: any;
  @ViewChild('action1Toggle2')
  action1Toggle2: any;
  @ViewChild('actionText22')
  actionText22: any;
  @ViewChild('action2Toggle2')
  action2Toggle2: any;

  @ViewChild('collapsibleToggle')
  collapsibleToggle: any;
  @ViewChild('collapsedToggle')
  collapsedToggle: any;
  @ViewChild('imageToggle')
  imageToggle: any;
  @ViewChild('avatarToggle')
  avatarToggle: any;

  files = {
    'html': {
      'data': LIST_ITEM_CARD_IMAGE_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': undefined
    }
  };

  onAction1() {
    alert('onAction1');
  }

  onAction2() {
    alert('onAction2');
  }

  onIconAction() {
    alert('onIconAction');
  }

  getStaticData() {
    return ListsUtils.getListData(1);
  }

  onShowSource(list?: any, exampleComp?: any) {
    const itemData: any = {
      iconPosition: this.iconPosition
    };

    if (this.iconToggle.checked) {
      itemData.icon = (this.itemIcon && this.itemIcon.nativeElement.value) ?
        this.itemIcon.nativeElement.value : '';
    }
    itemData.action1 = (this.action1Toggle2.checked && this.actionText12 && this.actionText12.nativeElement.value)
      ? this.actionText12.nativeElement.value : '';
    itemData.action2 = (this.action2Toggle2.checked && this.actionText22 && this.actionText22.nativeElement.value)
      ? this.actionText22.nativeElement.value : '';
    itemData.collapsible = this.collapsibleToggle.checked;
    itemData.collapsed = this.collapsedToggle.checked;
    itemData.image = this.imageToggle.checked;
    itemData.avatar = this.avatarToggle.checked;


    exampleComp.html = ListsUtils.replaceHtml(LIST_ITEM_CARD_IMAGE_HTML_DATA, list, itemData);

  }

}
