import { ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { ConfigCollapsibleStateService } from "../../shared/services/config-collapsible-state.service";

export class ConfigMenu {
  @ViewChild('sidenav', { static: false })
  private sidenav: MatSidenav;

  private innerWidth: any;
  public btnVisibility: boolean;

  constructor(
    protected configExpandedService: ConfigCollapsibleStateService
  ) { }

  ngOnInit(): void {
    this.configExpandedService.onStateChange((val) => {
      this.btnVisibility = !val;
    });
  }

  styleChangeOnResize(id: string, translate_x: string, translate_y: string, sidenavOpened?: boolean): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth >= 1920) {
      this.sidenav.opened = sidenavOpened != null ? sidenavOpened : this.sidenav.opened;
      this.sidenav.mode = "side";
      document.getElementById(id).style.transform = "rotate(90deg) translate(" + translate_x + "px," + translate_y + "px)";
    }
    else {
      this.sidenav.mode = "over";
      document.getElementById(id).style.transform = "rotate(90deg) translate(" + translate_x + "px," + translate_y + "px)";
      if (this.innerWidth <= 1279) {
        document.getElementById(id).style.transform = "rotate(0)";
      }
    }
  }
}