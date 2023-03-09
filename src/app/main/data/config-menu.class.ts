import { ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { ConfigCollapsibleStateService } from "../../shared/services/config-collapsible-state.service";

export class ConfigMenu {
  @ViewChild('sidenav', { static: false })
  public sidenav: MatSidenav;

  private innerWidth: any;
  public btnVisibility: boolean;

  constructor(
    protected configExpandedService: ConfigCollapsibleStateService
  ) { }

  ngOnInit(): void {
    if (window.innerWidth >= 1920) {
      this.btnVisibility = false;
    }
    else {
      this.btnVisibility = true;
    }
    this.configExpandedService.onStateChange((val) => {
      this.btnVisibility = !val;
    });
  }

  styleChangeOnResize(id: string, sidenavOpened?: boolean): void {
    this.innerWidth = window.innerWidth;
    const elemById = document.getElementById(id);
    if (this.innerWidth >= 1920) {
      this.sidenav.opened = sidenavOpened != null ? sidenavOpened : this.sidenav.opened;
      this.sidenav.mode = "side";
      if (elemById) {
        elemById.style.transform = "rotate(-90deg)";
      }

    }
    else if (this.innerWidth <= 1279) {
      this.sidenav.mode = "over";
      if (elemById) {
        elemById.style.transform = "rotate(0) translate(80px, 0)";
      }
    }
    else {
      this.sidenav.mode = "over";
      if (elemById) {
        elemById.style.transform = "rotate(-90deg)";
      }
    }
  }
}