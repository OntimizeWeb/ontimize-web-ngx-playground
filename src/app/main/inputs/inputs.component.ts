import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { OTranslatePipe, OTranslateService } from 'ontimize-web-ngx';
import { MatButtonModule } from '@angular/material/button';
import { CollapsibleMenuComponent } from '../../shared/collapsible-menu/collapsible-menu.component';
import { HeaderButtonMenuComponent } from '../../shared/header-button-menu/header-button-menu.component';
import { Subscription } from 'rxjs';

import { NavigationBarService } from '../../shared/navigation-bar.service';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, MatButtonModule, CollapsibleMenuComponent, HeaderButtonMenuComponent, OTranslatePipe],
  selector: 'inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputsComponent implements OnInit {

  public selectedComponent: string;
  private routerSubscription: Subscription;

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService,
    protected router: Router
  ) {
    this.routerSubscription = router.events.subscribe((val) => {
      this.selectedComponent = this.router.url.split("/")[this.router.url.split("/").length - 1].toUpperCase();
    });
  }

  ngOnInit() {
    let title = '';
    title += this.translateService.get('INPUTS');
    title = title + ' > ' + this.translateService.get('INPUTS');
    this.navigationService.setTitle(title);
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();

  }
}
