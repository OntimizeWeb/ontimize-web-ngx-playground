import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OTranslateService } from 'ontimize-web-ngx';

import { NavigationBarService } from '../../shared/navigation-bar.service';

@Component({
  selector: 'lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListsComponent implements OnInit {

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService
  ) { }

  ngOnInit() {
    let title = '';
    title += this.translateService.get('LISTS');
    title = title + ' > ' + this.translateService.get('LISTS');
    this.navigationService.setTitle(title);
  }

}
