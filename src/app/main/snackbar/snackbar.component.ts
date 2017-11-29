import { Component, OnInit } from '@angular/core';
import { OTranslateService, SnackBarService, OSnackBarConfig } from 'ontimize-web-ngx';
import { NavigationBarService } from '../../shared/navigation-bar.service';

const HTML_DATA = `
  <o-button attr="snackbar" type="raised" label="SNACKBAR" layout-padding (click)="showSnackbar($event)"></o-button>
`;

const TYPESCRIPT_DATA = `
  showSnackBar(e: Event): void {
    const config: OSnackBarConfig = {
      action: 'SNACKBAR.ACTION',
      milliseconds: 5000,
      icon: 'android',
      iconPosition: 'left'
    };
    this.snackBarService.open('SNACKBAR.TEXT', config);
  }
`;

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackBarComponent implements OnInit {

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService,
    protected snackBarService: SnackBarService) {
  }

  ngOnInit() {
    const title = this.translateService.get('SNACKBAR');
    this.navigationService.setTitle(title);
  }

  getComponentId() {
    return 'SnackBar';
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

  showSnackBar(e: Event): void {
    const config: OSnackBarConfig = {
      action: 'SNACKBAR.ACTION',
      milliseconds: 5000,
      icon: 'android',
      iconPosition: 'left'
    };
    this.snackBarService.open('SNACKBAR.TEXT', config);
  }

}
