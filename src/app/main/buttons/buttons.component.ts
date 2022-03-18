import { Component, OnInit } from '@angular/core';
import { OTranslateService } from 'ontimize-web-ngx';
import { NavigationBarService } from '../../shared/navigation-bar.service';;

const HTML_DATA = `
<div fxLayout="column" layout-padding>
  <div fxLayout="row">
    <o-button attr="basic1" type="BASIC" label="BASIC" layout-padding></o-button>
    <o-button attr="basic2" type="BASIC" label="Primary" layout-padding color="primary"></o-button>
    <o-button attr="basic3" type="BASIC" label="Accent" layout-padding color="accent"></o-button>
    <o-button attr="basic4" type="BASIC" label="Warn" layout-padding color="warn"></o-button>
    <o-button attr="basic5" type="BASIC" label="Disabled" layout-padding enabled="no"></o-button>
  </div>

  <div fxLayout="row">
    <o-button attr="raised1" type="RAISED" label="RAISED" layout-padding></o-button>
    <o-button attr="raised2" type="RAISED" label="Primary" layout-padding color="primary"></o-button>
    <o-button attr="raised3" type="RAISED" label="Accent" layout-padding color="accent"></o-button>
    <o-button attr="raised4" type="RAISED" label="Warn" layout-padding color="warn"></o-button>
    <o-button attr="raised5" type="RAISED" label="Disabled" layout-padding enabled="no"></o-button>
  </div>

  <div fxLayout="row">
    <o-button attr="stroked1" type="STROKED" label="STROKED" layout-padding></o-button>
    <o-button attr="stroked2" type="STROKED" label="Primary" layout-padding color="primary"></o-button>
    <o-button attr="stroked3" type="STROKED" label="Accent" layout-padding color="accent"></o-button>
    <o-button attr="stroked4" type="STROKED" label="Warn" layout-padding color="warn"></o-button>
    <o-button attr="stroked5" type="STROKED" label="Disabled" layout-padding enabled="no"></o-button>
  </div>

  <div fxLayout="row">
    <o-button attr="flat1" type="FLAT" label="FLAT" layout-padding></o-button>
    <o-button attr="flat2" type="FLAT" label="Primary" layout-padding color="primary"></o-button>
    <o-button attr="flat3" type="FLAT" label="Accent" layout-padding color="accent"></o-button>
    <o-button attr="flat4" type="FLAT" label="Warn" layout-padding color="warn"></o-button>
    <o-button attr="flat5" type="FLAT" label="Disabled" layout-padding enabled="no"></o-button>
  </div>

  <div fxLayout="row">
    <o-button attr="icon1" type="ICON" icon="add" layout-padding></o-button>
    <o-button attr="icon2" type="ICON" icon="add" layout-padding color="primary"></o-button>
    <o-button attr="icon3" type="ICON" icon="add" layout-padding color="accent"></o-button>
    <o-button attr="icon4" type="ICON" icon="add" layout-padding color="warn"></o-button>
    <o-button attr="icon5" type="ICON" icon="add" layout-padding enabled="no"></o-button>
  </div>

  <div fxLayout="row">
    <o-button attr="fab1" type="FAB" icon="power_setting" layout-padding></o-button>
    <o-button attr="fab2" type="FAB" icon="power_setting" layout-padding color="primary"></o-button>
    <o-button attr="fab3" type="FAB" icon="power_setting" layout-padding color="accent"></o-button>
    <o-button attr="fab4" type="FAB" icon="power_setting" layout-padding color="warn"></o-button>
    <o-button attr="fab5" type="FAB" icon="power_setting" layout-padding enabled="no"></o-button>
  </div>

  <div fxLayout="row">
    <o-button attr="fab-mini1" type="FAB-MINI" icon="power_setting" layout-padding></o-button>
    <o-button attr="fab-mini2" type="FAB-MINI" icon="power_setting" layout-padding color="primary"></o-button>
    <o-button attr="fab-mini3" type="FAB-MINI" icon="power_setting" layout-padding color="accent"></o-button>
    <o-button attr="fab-mini4" type="FAB-MINI" icon="power_setting" layout-padding color="warn"></o-button>
    <o-button attr="fab-mini5" type="FAB-MINI" icon="power_setting" layout-padding enabled="no"></o-button>
  </div>
</div>
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

const HTML_DATA_ICON_POSITION = `
  <div fxLayout="row wrap">
    <o-button attr="iconposition1" type="BASIC" color="primary" label="icon-position='left'" layout-padding icon="arrow_forward_ios">
    </o-button>
    <o-button attr="iconposition2" type="RAISED" color="primary" label="icon-position='right'" layout-padding icon="arrow_forward_ios"
      icon-position="right"></o-button>
    <o-button attr="iconposition3" type="STROKED" color="primary" label="icon-position='top'" layout-padding icon="arrow_forward_ios"
      icon-position="top"></o-button>
    <o-button attr="iconposition4" type="FLAT" color="primary" label="icon-position='bottom'" layout-padding icon="arrow_forward_ios"
      icon-position="bottom">
    </o-button>
  </div>
`;
const HTML_DATA_ICON_IMAGE = `
    <o-button label="Image icon" layout-padding image="./assets/images/visa.png"></o-button>
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

  getFiles(key: string) {
    return {
      'html': {
        'data': this.getHTMLData(key)
      },
      'scss': {
        'data': undefined
      },
      'typescript': {
        'data': TYPESCRIPT_DATA
      }
    };
  }

  public getHTMLData(key: string) {
    let code = '';
    switch (key) {
      case 'buttons':
        code = HTML_DATA;
        break;
      case 'button-toggle':
        code = HTML_DATA_TOGGLE;
        break;
      case 'button-icon-position':
        code = HTML_DATA_ICON_POSITION;
        break;
      case 'button-image-icon':
        code = HTML_DATA_ICON_IMAGE;
        break;
    }
    return code;
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
