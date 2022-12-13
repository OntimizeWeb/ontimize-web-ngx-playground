import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigMenu } from '../../main/data/config-menu.class';
import { ConfigCollapsibleStateService } from '../services/config-collapsible-state.service';

@Component({
  selector: 'data-structure',
  templateUrl: './data-structure.component.html',
  styleUrls: ['./data-structure.component.scss'],
  inputs: ['compName: comp-name'],
  encapsulation: ViewEncapsulation.None
})
export class DataStructureComponent extends ConfigMenu {

  public compName: string;
  private closedStard: Subscription;
  private openedStard: Subscription;

  constructor(
    protected configExpandedService: ConfigCollapsibleStateService,
    protected route: Router
  ) {
    super(configExpandedService);
  }

  toggle() {
    this.sidenav.toggle(!this.sidenav.opened);
  }

  formatButton() {
    if (this.route.url.includes("grid")) {
      this.styleChangeOnResize("grid-conf-btn-id", "75", "50");
    }
    else if (this.route.url.includes("list")) {
      this.styleChangeOnResize("list-conf-btn-id", "75", "50");
    }
    else if (this.route.url.includes("table")) {
      this.styleChangeOnResize("table-conf-btn-id", "75", "50");
    }
  }

  ngAfterViewInit(): void {
    this.closedStard = this.sidenav.closedStart.subscribe(() => {
      this.configExpandedService.setState(false);
      setTimeout(() => { this.formatButton(); }, 10);
    });
    this.openedStard = this.sidenav.openedStart.subscribe(() => {
      this.configExpandedService.setState(true);
    });

    if (this.route.url.includes("grid")) {
      this.styleChangeOnResize("grid-conf-btn-id", "75", "50", true);
    }
    else if (this.route.url.includes("list")) {
      this.styleChangeOnResize("list-conf-btn-id", "75", "50", true);
    }
    else if (this.route.url.includes("table")) {
      this.styleChangeOnResize("table-conf-btn-id", "75", "50", true);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.formatButton();

  }

  ngOnDestroy(): void {
    this.closedStard.unsubscribe();
    this.openedStard.unsubscribe();
  }

}
