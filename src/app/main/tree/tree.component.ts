import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { OTranslateService, Util } from 'ontimize-web-ngx';
import { NavigationBarService } from '../../shared/navigation-bar.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TreeComponent implements OnInit {

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService
  ) { }

  ngOnInit() {
    let title = this.translateService.get('TREE');
    this.navigationService.setTitle(title);
  }

}
