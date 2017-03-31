import { Component, ViewChild } from '@angular/core';

import { OCheckboxComponent, OTranslateService } from 'ontimize-web-ng2/ontimize';

import { NavigationBarService } from '../../../shared';

@Component({
  selector: 'checkbox-home',
  moduleId: module.id,
  styleUrls: ['checkbox-home.component.css'],
  templateUrl: 'checkbox-home.component.html'
})
export class CheckboxHomeComponent {

  @ViewChild('checkbox') checkBox: OCheckboxComponent;

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {
  }

  ngOnInit() {
    let title = '';
    title += this.translateService.get('INPUTS');
    title = title + ' > ' + this.translateService.get('CHECKBOX');
    this.navigationService.setTitle(title);
  }

  ngAfterViewInit() {
    this.checkBox.isReadOnly = false;
  }

  getCheckboxValue() {
    return true;
  }

  getComponentId() {
    return 'Checkbox';
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
<o-checkbox attr="check" label="O-checkbox (read-only)"></o-checkbox>

<o-checkbox #checkbox attr="check1" label="O-checkbox (edit mode)"></o-checkbox>

<o-checkbox attr="check2" label="O-checkbox disabled" enabled="no"></o-checkbox>
`;

const TYPESCRIPT_DATA = `
import { Component, ViewChild } from '@angular/core';

import { OCheckboxComponent } from 'ontimize-web-ng2/ontimize';

@Component({
  selector: 'checkbox-home',
  moduleId: module.id,
  styleUrls: ['checkbox-home.component.css'],
  templateUrl: 'checkbox-home.component.html'
})
export class CheckboxHomeComponent {

  @ViewChild('checkbox') checkBox: OCheckboxComponent;

  constructor() {
  }

  ngAfterViewInit() {
    this.checkBox.isReadOnly = false;
  }
}`;
