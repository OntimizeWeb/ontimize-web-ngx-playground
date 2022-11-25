import { Component, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ConfigMenu } from '../../main/data/config-menu.class';

@Component({
  selector: 'data-structure',
  templateUrl: './data-structure.component.html',
  styleUrls: ['./data-structure.component.scss'],
  inputs: ['compName: comp-name'],
  encapsulation: ViewEncapsulation.None
})
export class DataStructureComponent extends ConfigMenu{

  private compName: string;

  @ViewChild("sidenav", { static: false }) sidenav1: MatSidenav;

  toggle() {
    this.sidenav1.toggle(!this.sidenav1.opened);
  }

  ngAfterViewInit(): void {
    this.styleChangeOnResize("grid-conf-btn-id", "100", "50");
    this.styleChangeOnResize("list-conf-btn-id", "100", "50");
    this.styleChangeOnResize("table-conf-btn-id", "100", "50");
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.styleChangeOnResize("grid-conf-btn-id", "100", "50");
    this.styleChangeOnResize("list-conf-btn-id", "100", "50");
    this.styleChangeOnResize("table-conf-btn-id", "100", "50");
  }

}
