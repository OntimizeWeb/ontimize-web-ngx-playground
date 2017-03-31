import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { OTranslateService } from 'ontimize-web-ng2/ontimize';
import { NavigationBarService } from '../../../shared';
import { ListsUtils } from './lists-utils';

@Component({
  selector: 'lists-home',
  moduleId: module.id,
  styleUrls: ['lists-home.component.css'],
  templateUrl: 'lists-home.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ListsHomeComponent {


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

  list3iconPosition: String = 'right';

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {
  }

  ngOnInit() {
    let title = '';
    title += this.translateService.get('FIELDS');
    title = title + ' > ' + this.translateService.get('LISTS');
    this.navigationService.setTitle(title);
  }

  onAction1() {
    alert('onAction1');
  }

  onAction2() {
    alert('onAction2');
  }

  onIconAction() {
    alert('onIconAction');
  }

  addToFavorites(itemData, avatarItem) {
    if (avatarItem.icon === 'star') {
      avatarItem.icon = 'star_border';
    } else {
      avatarItem.icon = 'star';
    }
  }

  getListData(itemNumber?: number) {
    var result = [];
    var arrayLength = itemNumber || 3;
    let USERS_LIST = ListsUtils.getUsers();
    for (var i = 0; i < arrayLength; i++){
      result.push(USERS_LIST[i]);
    }

    // while (result.length < arrayLength) {
    //   let index = Math.floor(Math.random() * USERS_LIST.length);
    //   if (result.indexOf(USERS_LIST[index]) === -1) {
    //     result.push(USERS_LIST[index]);
    //   }
    // }
    return result;
  }

  getComponentId(key: string) {
    return ListsUtils.getComponentId(key);
  }

  getFiles(key: string, list?: any) {
    return ListsUtils.getFiles(key, list);
  }

  onShowSource(key: string, list?: any, exampleComp?: any) {
    let itemData: any = {
      iconPosition: this.list3iconPosition
    };

    if (this.iconToggle.checked) {
      itemData.icon = (this.itemIcon && this.itemIcon.nativeElement.value) ?
        this.itemIcon.nativeElement.value : '';
    }

    switch (key) {
      case 'o-list-item-card':
        itemData.action1 = (this.action1Toggle.checked && this.actionText1 && this.actionText1.nativeElement.value)
          ? this.actionText1.nativeElement.value : '';
        itemData.action2 = (this.action2Toggle.checked && this.actionText2 && this.actionText2.nativeElement.value)
          ? this.actionText2.nativeElement.value : '';
        break;
      case 'o-list-item-card-image':
        itemData.action1 = (this.action1Toggle2.checked && this.actionText12 && this.actionText12.nativeElement.value)
          ? this.actionText12.nativeElement.value : '';
        itemData.action2 = (this.action2Toggle2.checked && this.actionText22 && this.actionText22.nativeElement.value)
          ? this.actionText22.nativeElement.value : '';
        itemData.collapsible = this.collapsibleToggle.checked;
        itemData.collapsed = this.collapsedToggle.checked;
        itemData.image = this.imageToggle.checked;
        itemData.avatar = this.avatarToggle.checked;
        break;
      default:
        break;
    }
    exampleComp.html = ListsUtils.getHtml(key, list, itemData);
  }
}