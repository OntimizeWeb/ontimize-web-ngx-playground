import { Component, OnInit } from '@angular/core';
import { OTranslateService } from 'ontimize-web-ngx';
import { NavigationBarService } from '../../shared/navigation-bar.service';;

const HTML_DATA = `
  <o-button attr="basic" type="BASIC" label="BASIC" layout-padding></o-button>

  <o-button attr="raised" type="RAISED" label="RAISED" layout-padding></o-button>

  <o-button attr="stroked" type="STROKED" label="STROKED" layout-padding></o-button>

  <o-button attr="flat" type="FLAT" label="FLAT" layout-padding></o-button>

  <o-button attr="icon" type="ICON" icon="add" layout-padding></o-button>

  <o-button attr="floating" type="FAB" icon="power_setting" layout-padding></o-button>

  <o-button attr="floating-mini" type="FAB-MINI" icon="power_setting" layout-padding></o-button>
`;

const HTML_DATA_TOGGLE = `
<o-button-toggle attr="singleToggle" label="Toggle me!" layout-padding></o-button-toggle>

<o-button-toggle-group attr="toggleGroup" layout="row" multiple="no" value="car" layout-padding>
  <o-button-toggle attr="toggle1" value="bike" icon="directions_bike"></o-button-toggle>
  <o-button-toggle attr="toggle2" value="car" icon="directions_car"></o-button-toggle>
  <o-button-toggle attr="toggle3" value="train" icon="directions_railway"></o-button-toggle>
  <o-button-toggle attr="toggle4" value="boat" icon="directions_boat" enabled="no"></o-button-toggle>
</o-button-toggle-group>
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

  getFilesToggle() {
    return {
      'html': {
        'data': HTML_DATA_TOGGLE
      },
      'scss': {
        'data': undefined
      },
      'typescript': {
        'data': TYPESCRIPT_DATA
      }
    };
  }

}
