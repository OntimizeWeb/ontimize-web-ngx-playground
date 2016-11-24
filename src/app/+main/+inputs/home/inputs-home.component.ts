import { Component, ViewChild } from '@angular/core';

import { OTextInputComponent } from 'ontimize-web-ng2/ontimize';

@Component({
  selector: 'inputs-home',
  moduleId: module.id,
  styleUrls: ['inputs-home.component.css'],
  templateUrl: 'inputs-home.component.html'
})
export class InputsHomeComponent {

  @ViewChild('input') input: OTextInputComponent;

  constructor() {
  }

  ngAfterViewInit() {
    if (this.input) {
      this.input.isReadOnly = false;
    }
  }

  getInputValue() {
    return 'John Doe';
  }

  getComponentId() {
    return 'Text Inputs';
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
        'data':TYPESCRIPT_DATA
      }
    ]
  }


}

const HTML_DATA = `
<o-text-input attr="input" label="o-input (read-only)" layout-padding
  [data]="getInputValue()"></o-text-input>

<o-text-input #input attr="input2" label="o-input (edit mode)"  layout-padding
  [data]="getInputValue()"></o-text-input>

<o-text-input attr="input3" label="o-input disabled" enabled="no"  layout-padding
  [data]="getInputValue()"></o-text-input>`;

const TYPESCRIPT_DATA = `
import { Component, ViewChild } from '@angular/core';

import { OTextInputComponent } from 'ontimize-web-ng2/ontimize';

@Component({
  selector: 'inputs-home',
  moduleId: module.id,
  styleUrls: ['inputs-home.component.css'],
  templateUrl: 'inputs-home.component.html'
})
export class InputsHomeComponent {

  @ViewChild('input') input: OTextInputComponent;

  constructor() {
  }

  ngAfterViewInit() {
    if (this.input) {
      this.input.isReadOnly = false;
    }
  }

  getInputValue() {
    return 'John Doe';
  }
}`;
