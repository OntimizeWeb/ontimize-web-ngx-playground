import { Component, OnInit } from '@angular/core';
import { OTranslateService } from 'ontimize-web-ngx';

import { NavigationBarService } from '../../../shared/navigation-bar.service';

const HTML_DATA = `
<div [oContextMenu]="myOContextMenu" class="clickable" fxLayoutAlign="center center" layout-padding>

  <span>Right click me!</span>

</div>
<o-context-menu #myOContextMenu>
  <o-context-menu-item icon="face" label="Item 1" (execute)="onExecute('Item 1')" enabled="no"></o-context-menu-item>
  <o-context-menu-group label="Group" icon="priority_high" >
      <o-context-menu-item icon="star_rate" label="Item 2" (execute)="onExecute('Item 2')"  enabled="no"></o-context-menu-item>
      <o-context-menu-separator></o-context-menu-separator>
      <o-context-menu-item label="Item 3" (execute)="onExecute('Item 3')" [visible]="getVisible"></o-context-menu-item>
  </o-context-menu-group>
</o-context-menu>
`;

const TYPESCRIPT_DATA = `
  onExecute(text: string) {
    alert(text + ' click!');
  }
`;

@Component({
  selector: 'app-context-menu',
  templateUrl: 'context-menu.component.html',
  styleUrls: ['context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit {

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService
  ) { }

  ngOnInit() {
    const title = this.translateService.get('CONTEXTMENU');
    this.navigationService.setTitle(title);
  }

  getFiles() {
    return {
      'html': {
        'data': HTML_DATA
      },
      'scss': {
        'data': undefined
      },
      'typescript': {
        'data': TYPESCRIPT_DATA
      }
    };
  }

  onExecute(text: string) {
    alert(text + ' click!');
  }

}
