import { Component, inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { OButtonComponent, OTranslatePipe } from 'ontimize-web-ngx';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  imports: [MatSidenavModule, MatIconModule, MatButtonModule, MatDividerModule, OButtonComponent, OTranslatePipe],
  selector: 'screen-configuration',
  templateUrl: './screen-configuration.component.html',
  styleUrls: ['./screen-configuration.component.scss'],
  inputs: ['compName: comp-name'],
  encapsulation: ViewEncapsulation.None
})
export class ScreenConfigurationComponent {

  @ViewChild('sidenav')
  public sidenav: MatSidenav;
  protected subscription: Subscription = new Subscription();
  protected media = inject(BreakpointObserver);

  ngAfterViewInit(): void {
    this.subscribeToMediaChanges();
    if (this.media.isMatched(Breakpoints.XLarge)) {
      this.sidenav.opened = true;
    }
  }

  public subscribeToMediaChanges(): void {
    this.subscription.add(
      this.media.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
        .subscribe(result => {
          if (result.breakpoints[Breakpoints.XLarge]) {
            this.sidenav.mode = "side";
          } else {
            this.sidenav.mode = "over";
          }
        })
    );
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
