import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    protected configExpandedService: ConfigCollapsibleStateService,
    protected route: Router
  ) {
    super(configExpandedService);

  }

  toggle() {
    this.sidenav.toggle(!this.sidenav.opened);
    this.configExpandedService.setState(this.sidenav.opened);
  }

  formatButton() {
    if (this.route.url.includes("grid")) {
      this.styleChangeOnResize("grid-conf-btn-id", "100", "50");
    }
    else if (this.route.url.includes("list")) {
      this.styleChangeOnResize("list-conf-btn-id", "100", "50");
    }
    else if (this.route.url.includes("table")) {
      this.styleChangeOnResize("table-conf-btn-id", "100", "50");
    }
  }

  ngAfterViewInit(): void {
    this.sidenav.closedStart.subscribe(() => {
      this.configExpandedService.setState(this.sidenav.opened);
      this.formatButton();
    });
    /*this.sidenav._closedStream.subscribe(() => {
      this.configExpandedService.setState(this.sidenav.opened);
      this.formatButton();
    });*/
    this.formatButton();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.formatButton();

  }

}
