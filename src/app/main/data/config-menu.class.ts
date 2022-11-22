import { ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";

export class ConfigMenu{
  @ViewChild('sidenav', { static: false })
  private sidenav: MatSidenav;

  private innerWidth: any;

  styleChangeOnResize(id: string, translate_x: string, translate_y?: string): void {
    if (translate_y == null) {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth >= 1920) {
        this.sidenav.opened = true;
        this.sidenav.mode = "side";
        document.getElementById(id).style.transform = "rotate(90deg) translate(" + translate_x + "px, 40px)";
      }
      else {
        this.sidenav.mode = "over";
        document.getElementById(id).style.transform = "rotate(90deg)  translate(" + translate_x + "px, 40px)";
        if (this.innerWidth <= 1279) {
          document.getElementById(id).style.transform = "rotate(0)";
        }
      }
    }
    else {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth >= 1920) {
        this.sidenav.opened = true;
        this.sidenav.mode = "side";
        document.getElementById(id).style.transform = "rotate(90deg) translate(" + translate_x + "px, " + translate_y + "px)";
      }
      else {
        this.sidenav.mode = "over";
        document.getElementById(id).style.transform = "rotate(90deg)  translate(" + translate_x + "px, " + translate_y + "px)";
        if (this.innerWidth <= 1279) {
          document.getElementById(id).style.transform = "rotate(0)";
        }
      }
    }

  }
}