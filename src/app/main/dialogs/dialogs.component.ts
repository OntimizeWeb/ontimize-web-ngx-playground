import { Component, OnInit } from '@angular/core';
import {
  OTranslateService,
  DialogService,
  ODialogConfig
} from 'ontimize-web-ngx';
import { NavigationBarService } from '../../shared/navigation-bar.service';;

const HTML_DATA = `
<o-button attr="flat" type="FLAT" label="FLAT" layout-padding></o-button>

<o-button attr="raised" type="RAISED" label="RAISED" layout-padding></o-button>

<o-button attr="floating" type="FLOATING" icon="add" layout-padding></o-button>
`;

const TYPESCRIPT_DATA = ``;

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService,
    protected dialogService: DialogService) {
  }

  ngOnInit() {
    const title = this.translateService.get('DIALOGS');
    this.navigationService.setTitle(title);
  }

  showAlert(evt: any) {
    if (this.dialogService) {
      this.dialogService.alert('Alert dialog title', 'This is an amazing "Alert" dialog');
    }
  }

  showInfo(evt: any) {
    if (this.dialogService) {
      const config: ODialogConfig = {
        icon: 'alarm',
        okButtonText: 'It rocks!'
      };
      this.dialogService.info('Info dialog title',
        'This is an amazing "Information" dialog', config);
    }
  }


  showWarning(evt: any) {
    if (this.dialogService) {
      const config: ODialogConfig = {
        icon: 'alarm',
        okButtonText: 'It rocks!'
      };
      this.dialogService.warn('Warning dialog title', 'This is an amazing "Warning" dialog',
        config);
    }
  }

  showError(evt: any) {
    if (this.dialogService) {
      const config: ODialogConfig = {
        icon: 'alarm',
        okButtonText: 'It rocks!'
      };
      this.dialogService.error('Error dialog title', 'This is an amazing "Error" dialog', config);
    }
  }

  showConfirm(evt: any) {
    if (this.dialogService) {
      this.dialogService.confirm('Confirm dialog title', 'Do you really want to accept?');
    }
  }

  getComponentId() {
    return 'Dialogs';
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
    ];
  }

}
