import { Component, OnInit } from '@angular/core';
import { OTranslateService } from 'ontimize-web-ngx';
import { NavigationBarService } from '../../shared/navigation-bar.service';;

const HTML_DATA = `
<o-button attr="flat" type="FLAT" label="FLAT" layout-padding></o-button>

<o-button attr="raised" type="RAISED" label="RAISED" layout-padding></o-button>

<o-button attr="floating" type="FLOATING" icon="add" layout-padding></o-button>
`;

const TYPESCRIPT_DATA = ``;

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {
  }

  ngOnInit() {
    const title = this.translateService.get('BUTTONS');
    this.navigationService.setTitle(title);
  }

  getFiles() {
    return {
      files: [
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
    };
  }

}
