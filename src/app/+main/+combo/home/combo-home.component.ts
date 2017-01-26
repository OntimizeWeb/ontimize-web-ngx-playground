import { Component, ViewChild } from '@angular/core';

import { OComboComponent, OTranslateService } from 'ontimize-web-ng2/ontimize';

import { NavigationBarService } from '../../../shared';

@Component({
  selector: 'combo-home',
  moduleId: module.id,
  styleUrls: ['combo-home.component.css'],
  templateUrl: 'combo-home.component.html'
})
export class ComboHomeComponent {

  @ViewChild('combo') combo: OComboComponent;
  @ViewChild('combo1') combo1: OComboComponent;

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {
  }


  ngOnInit() {
    let title = '';
    title += this.translateService.get('INPUTS');
    title = title + ' > ' + this.translateService.get('COMBO');
    this.navigationService.setTitle(title);
  }

  ngAfterViewInit() {
    if (this.combo) {
      this.combo.isReadOnly = false;
      // var self = this;
      // window.setTimeout(() => {
      //   self.combo.setValue(1);
      // },1000);
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

  getComponentId() {
    return 'Combos';
  }

  getFiles() {
    return [
      {
        'type': 'html',
        'data': HTML_DATA
      },
      {
        'type': 'scss',
        'data': ''
      },
      {
        'type': 'typescript',
        'data': TYPESCRIPT_DATA
      }
    ]
  }

}

const HTML_DATA = `
<o-combo attr="combo" label="o-combo (read-only)" layout-padding [static-data]="getComboData()"
  value-column="key" columns="key;value" visible-columns="value" query-on-init="no" query-on-bind="no"></o-combo>

<o-combo #combo attr="combo-editable" label="o-combo" layout-padding style="min-width:200px;" [static-data]="getComboData()"
  value-column="key" columns="key;value" visible-columns="value" query-on-init="no" query-on-bind="no"></o-combo>

<o-combo attr="combo-disabled" label="o-combo-disabled (read-only)" enabled="no" layout-padding [static-data]="getComboData()"
  value-column="key" columns="key;value" visible-columns="value" query-on-init="no" query-on-bind="no"></o-combo>
`;

const TYPESCRIPT_DATA = `
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
}`;
