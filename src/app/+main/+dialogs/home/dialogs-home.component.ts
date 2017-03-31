import { Component, ElementRef } from '@angular/core';

import { OTranslateService, DialogService, ODialogConfig } from 'ontimize-web-ng2/ontimize';

import { NavigationBarService } from '../../../shared';

@Component({
  selector: 'dialogs-home',
  moduleId: module.id,
  styleUrls: ['dialogs-home.component.css'],
  templateUrl: 'dialogs-home.component.html'
})
export class DialogsHomeComponent {

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService,
    protected dialogService: DialogService) {
  }

  ngOnInit() {
    let title = this.translateService.get('DIALOGS');
    this.navigationService.setTitle(title);
  }

  showAlert(evt: any) {
    if (this.dialogService) {
      this.dialogService.alert('Alert dialog title', 'This is an amazing "Alert" dialog');
    }
  }

  showInfo(evt: any) {
    if (this.dialogService) {
      let config: ODialogConfig = {
        icon: 'alarm',
        okButtonText: 'It rocks!'
      }
      this.dialogService.info('Info dialog title', 'This is an amazing "Information" dialog', config);
    }
  }


  showWarning(evt: any) {
    if (this.dialogService) {
      let config: ODialogConfig = {
        icon: 'alarm',
        okButtonText: 'It rocks!'
      }
      this.dialogService.warn('Warning dialog title', 'This is an amazing "Warning" dialog');
    }
  }

  showError(evt: any) {
    if (this.dialogService) {
      let config: ODialogConfig = {
        icon: 'alarm',
        okButtonText: 'It rocks!'
      }
      this.dialogService.error('Error dialog title', 'This is an amazing "Error" dialog');
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
    ]
  }

}

const HTML_DATA = `
<o-button attr="flat" type="FLAT" label="FLAT" layout-padding></o-button>

<o-button attr="raised" type="RAISED" label="RAISED" layout-padding></o-button>

<o-button attr="floating" type="FLOATING" icon="add" layout-padding></o-button>
`;

const TYPESCRIPT_DATA = ``;
