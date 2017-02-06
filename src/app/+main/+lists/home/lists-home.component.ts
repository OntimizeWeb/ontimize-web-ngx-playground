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
    while (result.length < arrayLength) {
      let index = Math.floor(Math.random() * USERS_LIST.length);
      if (result.indexOf(USERS_LIST[index]) === -1) {
        result.push(USERS_LIST[index]);
      }
    }
    return result;
  }

  getComponentId(key: string) {
    return ListsUtils.getComponentId(key);
  }

  getFiles(key: string) {
    return ListsUtils.getFiles(key);
  }
}