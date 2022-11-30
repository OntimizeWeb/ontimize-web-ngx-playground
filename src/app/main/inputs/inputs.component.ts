import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { OTranslateService } from 'ontimize-web-ngx';

import { NavigationBarService } from '../../shared/navigation-bar.service';

@Component({
  selector: 'inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputsComponent implements OnInit {

  public selectedComponent: string;

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService,
    protected router: Router
  ) {
    router.events.subscribe((val) => {
      this.selectedComponent = this.router.url.split("/")[this.router.url.split("/").length - 1].toUpperCase();
    });
  }

  ngOnInit() {
    let title = '';
    title += this.translateService.get('INPUTS');
    title = title + ' > ' + this.translateService.get('INPUTS');
    this.navigationService.setTitle(title);
  }

}
