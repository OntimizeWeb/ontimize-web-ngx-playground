import { Component, HostListener, Injector, ViewChild, ViewEncapsulation } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material';
import { Subscription } from 'rxjs';

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
  protected subscription: Subscription = new Subscription();
  protected media: MediaObserver;
  //private innerWidth: any;

  constructor(injector: Injector) {
    this.media = injector.get(MediaObserver);
  }

  ngAfterViewInit(): void {
    this.subscribeToMediaChanges();
    if (this.media.isActive("xl")) {
      this.sidenav.opened = true;
    }
  }

  public subscribeToMediaChanges(): void {
    this.subscription.add(this.media.asObservable().subscribe((change: MediaChange[]) => {
      if (change && change[0]) {
        switch (change[0].mqAlias) {
          case 'xs':
          case 'sm':
          case 'md':
            this.sidenav.mode = "over";
            break;
          case 'lg':
          case 'xl':
            this.sidenav.mode = "side";
        }
      }
    }));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toggle() {
    this.sidenav.toggle(!this.sidenav.opened);
  }

}
