import { Component, ViewChild } from '@angular/core';

import { OComboComponent } from 'ontimize-web-ng2/ontimize';

@Component({
  selector: 'combo-home',
  moduleId: module.id,
  styleUrls: ['combo-home.component.css'],
  templateUrl: 'combo-home.component.html'
})
export class ComboHomeComponent {

  @ViewChild('combo') combo: OComboComponent;
  @ViewChild('combo1') combo1: OComboComponent;

  constructor() {
  }

  ngAfterViewInit() {
    if (this.combo) {
      this.combo.isReadOnly = false;
    }
    if (this.combo1) {
      this.combo1.isReadOnly = false;
    }
  }

  getComboData() {
    let array: Array<Object> = [];
    array.push({
      'key': 1,
      'value': 'Spain'
    });
    array.push({
      'key': 2,
      'value': 'United States'
    });
    array.push({
      'key': 3,
      'value': 'United Kingdom'
    });
    array.push({
      'key': 4,
      'value': 'Germany'
    });
    return array;
  }

  getComboValue() {
    return 1;
  }

}
