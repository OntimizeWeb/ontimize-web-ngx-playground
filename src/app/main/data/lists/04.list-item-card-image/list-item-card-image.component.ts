import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ListsUtils } from '../lists-utils';
import { ExampleComponent } from '../../../../shared/example/example.component';

const LIST_ITEM_CARD_IMAGE_HTML_DATA = `
<o-list #list attr="list" title="{title}" columns="id;name;username;email;street;phone" keys="id"
  [static-data]="getStaticData()" refresh-button="{refreshButton}" insert-button="{insertButton}"
  quick-filter="no" row-height="medium" detail-mode="none">

  <o-list-item *ngFor="let row of #list.dataArray">
    <o-list-item-card-image title="{{ row.username }}" subtitle="{{ row.name }}" content="{{ row.body }}" avatar="{avatar}"
      image="{image}" action-1-text="{action1}" action-2-text="{action2}" (action-1)="onAction1()" (action-2)="onAction2()"
      icon="{icon}" (icon-action)="onIconAction()" collapsible="{collapsible}" collapsed="{collapsed}">
    </o-list-item-card-image>
  </o-list-item>

</o-list>
`;

const LIST_ITEM_CARD_IMAGE_TS_DATA = `
  onAction1() {
    alert('onAction1');
  }

  onAction2() {
    alert('onAction2');
  }

  onIconAction() {
    alert('onIconAction');
  }
`;

@Component({
  selector: 'list-item-card-image',
  templateUrl: './list-item-card-image.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ListItemCardImageComponent {

  iconPosition: string = 'right';
  html: string;

  @ViewChild('listTitle', { static: false })
  listTitle: any;
  @ViewChild('refreshButtonToggle', { static: false })
  refreshButtonToggle: any;
  @ViewChild('imageToggle', { static: false })
  imageToggle: any;
  @ViewChild('insertButtonToggle', { static: false })
  insertButtonToggle: any;
  @ViewChild('avatarToggle', { static: false })
  avatarToggle: any;
  @ViewChild('collapsibleToggle', { static: false })
  collapsibleToggle: any;
  @ViewChild('collapsedToggle', { static: false })
  collapsedToggle: any;
  @ViewChild('action1Toggle', { static: false })
  action1Toggle: any;
  @ViewChild('action1Text', { static: false })
  action1Text: any;
  @ViewChild('action2Toggle', { static: false })
  action2Toggle: any;
  @ViewChild('action2Text', { static: false })
  action2Text: any;
  @ViewChild('iconToggle', { static: false })
  iconToggle: any;
  @ViewChild('icon', { static: false })
  icon: any;
  @ViewChild('rowHeight', { static: false })
  rowHeight: any;
  @ViewChild('list', { static: false })
  list: any;

  files = {
    'html': {
      'data': LIST_ITEM_CARD_IMAGE_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': LIST_ITEM_CARD_IMAGE_TS_DATA
    }
  };

  constructor() { }

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

  updateCodeValue(key: string, value) {
    let htmlData: string = LIST_ITEM_CARD_IMAGE_HTML_DATA;
    const itemData: any = {
      iconPosition: this.iconPosition
    };
    htmlData = htmlData.replace("{" + key + "}", value);
    itemData.image = this.imageToggle.checked;
    itemData.avatar = this.avatarToggle.checked ? '{{ row.thumbnailUrl }}' : '';
    itemData.collapsible = this.collapsibleToggle.checked;
    itemData.collapsed = this.collapsedToggle.checked;
    itemData.action1 = (this.action1Toggle.checked && this.action1Text && this.action1Text.nativeElement.value)
      ? this.action1Text.nativeElement.value : '';
    itemData.action2 = (this.action2Toggle.checked && this.action2Text && this.action2Text.nativeElement.value)
      ? this.action2Text.nativeElement.value : '';
    if (this.iconToggle.checked) {
      itemData.icon = (this.icon && this.icon.nativeElement.value) ?
        this.icon.nativeElement.value : '';
    }
    this.html = ListsUtils.replaceHtml(htmlData, this.list, itemData);
  }

  onShowSource(list?: any, exampleComp?: any) {
    const itemData: any = {
      iconPosition: this.iconPosition
    };

    list.title = this.listTitle.nativeElement.value;
    list.refreshButton = this.refreshButtonToggle.checked;
    list.insertButton = this.insertButtonToggle.checked;
    itemData.image = this.imageToggle.checked;
    itemData.avatar = this.avatarToggle.checked ? '{{ row.thumbnailUrl }}' : '';
    itemData.collapsible = this.collapsibleToggle.checked;
    itemData.collapsed = this.collapsedToggle.checked;
    itemData.action1 = (this.action1Toggle.checked && this.action1Text && this.action1Text.nativeElement.value)
      ? this.action1Text.nativeElement.value : '';
    itemData.action2 = (this.action2Toggle.checked && this.action2Text && this.action2Text.nativeElement.value)
      ? this.action2Text.nativeElement.value : '';
    if (this.iconToggle.checked) {
      itemData.icon = (this.icon && this.icon.nativeElement.value) ?
        this.icon.nativeElement.value : '';
    }

    this.html = ListsUtils.replaceHtml(LIST_ITEM_CARD_IMAGE_HTML_DATA, list, itemData);
  }

}
