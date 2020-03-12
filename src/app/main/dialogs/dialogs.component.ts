import { Component, OnInit } from '@angular/core';
import { DialogService, ODialogConfig, OTranslateService } from 'ontimize-web-ngx';

import { NavigationBarService } from '../../shared/navigation-bar.service';

const HTML_DATA = `
  <o-button attr="alert" type="RAISED" label="ALERT_DIALOG" layout-padding (click)="showAlert($event)" ></o-button>
  <o-button attr="info" type="RAISED" label="INFO_DIALOG" layout-padding (click)="showInfo($event)" ></o-button>
  <o-button attr="warn" type="RAISED" label="WARNING_DIALOG" layout-padding (click)="showWarning($event)" ></o-button>
  <o-button attr="error" type="RAISED" label="ERROR_DIALOG" layout-padding (click)="showError($event)" ></o-button>
  <o-button attr="confirm" type="RAISED" label="CONFIRM_DIALOG" layout-padding (click)="showConfirm($event)"></o-button>
`;

const TYPESCRIPT_DATA = `
import {
  DialogService,
  ODialogConfig
} from 'ontimize-web-ngx';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})

export class DialogsComponent implements OnInit {
    constructor(
      protected dialogService: DialogService) {
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
  }
`;

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

}
