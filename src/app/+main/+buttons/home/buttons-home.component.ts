import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'buttons-home',
  moduleId: module.id,
  styleUrls: ['buttons-home.component.css'],
  templateUrl: 'buttons-home.component.html'
})
export class ButtonsHomeComponent {

  constructor() {
  }

  getComponentId() {
    return 'Buttons';
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
<o-button attr="flat" type="FLAT" label="FLAT" layout-padding></o-button>

<o-button attr="raised" type="RAISED" label="RAISED" layout-padding></o-button>

<o-button attr="floating" type="FLOATING" icon="add" layout-padding></o-button>
`;

const TYPESCRIPT_DATA = ``;
