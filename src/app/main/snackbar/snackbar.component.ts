import { Component, OnInit } from '@angular/core';
import { OTranslateService, SnackBarService } from 'ontimize-web-ngx';
import { NavigationBarService } from '../../shared/navigation-bar.service';

const HTML_DATA = `
  <o-button attr="snackbar" type="raised" label="SNACKBAR" layout-padding (click)="showSnackbar($event)"></o-button>
`;

const TYPESCRIPT_DATA = `
  showSnackBar(e: Event): void {
    this.snackBarService.open('SNACKBAR.TEXT', 'SNACKBAR.ACTION', 500, 'android', 'left');
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
    this.snackBarService.open('SNACKBAR.TEXT', 'SNACKBAR.ACTION', 500, 'android', 'left');
  }

}
