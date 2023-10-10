import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ListsUtils } from '../lists-utils';
import { ExampleComponent } from '../../../../shared/example/example.component';

const LIST_ITEM_CARD_HTML_DATA = `
<o-list #list attr="list" title="{title}" columns="id;name;username;email;street;phone" keys="id"
  [static-data]="getStaticData()" refresh-button="{refreshButton}" quick-filter="{quickFilter}" insert-button="{insertButton}"
  row-height="{rowHeight}" detail-mode="none">

  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-card #item title="{{ row.username }}" subtitle="{{ row.name }}" show-image="{showImage}" image="{{ row.image }}"
      action-1-text="{actionText1}" action-2-text="{actionText2}"
      (action-1)="onAction1()" (action-2)="onAction2()">
    </o-list-item-card>
  </o-list-item>

</o-list>
`;

const LIST_ITEM_CARD_TS_DATA = `
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
  selector: 'list-item-card',
  templateUrl: './list-item-card.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ListItemCardComponent {

  iconPosition: string = 'right';
  protected staticData = ListsUtils.getListData();
  html: string;

  @ViewChild('listTitle')
  listTitle: any;
  @ViewChild('insertButtonToggle')
  insertButtonToggle: any;
  @ViewChild('refreshButtonToggle')
  refreshButtonToggle: any;
  @ViewChild('quickFilterToggle')
  quickFilterToggle: any;
  @ViewChild('showImageToggle')
  showImageToggle: any;
  @ViewChild('action1Toggle')
  action1Toggle: any;
  @ViewChild('action2Toggle')
  action2Toggle: any;
  @ViewChild('rowHeight')
  rowHeight: any;
  @ViewChild('actionText1')
  actionText1: any;
  @ViewChild('actionText2')
  actionText2: any;
  @ViewChild('list')
  list: any;

  files = {
    'html': {
      'data': LIST_ITEM_CARD_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': LIST_ITEM_CARD_TS_DATA
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
    return this.staticData;
  }

  updateCodeValue(key: string, value) {
    let htmlData: string = LIST_ITEM_CARD_HTML_DATA;
    const itemData: any = {};
    htmlData = htmlData.replace("{" + key + "}", value);
    itemData.showImage = this.showImageToggle.checked;
    itemData.actionText1 = this.actionText1.nativeElement.value;
    itemData.actionText2 = this.actionText2.nativeElement.value;
    this.html = ListsUtils.replaceHtml(htmlData, this.list, itemData);
  }

  onShowSource(list?: any, exampleComp?: any) {
    const itemData: any = {};

    list.title = this.listTitle.nativeElement.value;
    list.refreshButton = this.refreshButtonToggle.checked;
    list.quickFilter = this.quickFilterToggle.checked;
    list.insertButton = this.insertButtonToggle.checked;
    itemData.showImage = this.showImageToggle.checked;
    itemData.actionText1 = this.actionText1.nativeElement.value;
    itemData.actionText2 = this.actionText2.nativeElement.value;

    this.html = ListsUtils.replaceHtml(LIST_ITEM_CARD_HTML_DATA, list, itemData);
  }

}
