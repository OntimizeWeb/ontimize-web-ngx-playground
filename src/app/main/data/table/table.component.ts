import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { OTranslatePipe, OTranslateService } from 'ontimize-web-ngx';
import { MatButtonModule } from '@angular/material/button';
import { CollapsibleMenuComponent } from '../../../shared/collapsible-menu/collapsible-menu.component';
import { HeaderButtonMenuComponent } from '../../../shared/header-button-menu/header-button-menu.component';
import { NavigationBarService } from '../../../shared/navigation-bar.service';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, MatButtonModule, CollapsibleMenuComponent, HeaderButtonMenuComponent, OTranslatePipe],
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService
  ) { }

  ngOnInit() {
    let title = this.translateService.get('TABLE');
    this.navigationService.setTitle(title);
  }

}
