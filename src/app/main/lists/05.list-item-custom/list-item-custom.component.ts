import { Component, ViewChild } from '@angular/core';

import { ListsUtils } from '../lists-utils';

const LIST_ITEM_CUSTOM_HTML_DATA = `
<o-list #list attr="list" columns="id;name;username;email;street;phone" quick-filter-columns="name;username" [static-data]="getStaticData()">

  <mat-card *ngFor="let row of list.dataArray" [o-list-item]="row">
    <mat-card-header>
      <div mat-card-avatar>
        <img src="{{ row.image }}" fxFill />
      </div>
      <mat-card-title>{{ row.name }}</mat-card-title>
      <mat-card-subtitle>{{ row.body }}</mat-card-subtitle>
    </mat-card-header>
  </mat-card>

</o-list>
`;

@Component({
  selector: 'list-item-custom',
  templateUrl: './list-item-custom.component.html'
})
export class ListItemCustomComponent {

  files = {
    'html': {
      'data': LIST_ITEM_CUSTOM_HTML_DATA
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

}
