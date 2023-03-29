import { Component, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'data-structure',
  templateUrl: './data-structure.component.html',
  styleUrls: ['./data-structure.component.scss'],
  inputs: ['compName: comp-name'],
  encapsulation: ViewEncapsulation.None
})
export class DataStructureComponent {

  @ViewChild('sidenav', { static: false })
  public sidenav: MatSidenav;

  //private innerWidth: any;

  constructor() { }

  /*styleChangeOnResize(init?:boolean): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 1280) {
      this.sidenav.mode = "over";
    }
    else if (this.innerWidth >= 1920 && init) {
      this.sidenav.mode = "side";
      this.sidenav.opened = true;
    }
    else {
      this.sidenav.mode = "side";
    }
  }

  ngAfterViewInit(): void {
    this.styleChangeOnResize(true);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.styleChangeOnResize();
  }*/

  toggle() {
    this.sidenav.toggle(!this.sidenav.opened);
  }

}
