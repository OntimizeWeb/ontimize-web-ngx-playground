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
