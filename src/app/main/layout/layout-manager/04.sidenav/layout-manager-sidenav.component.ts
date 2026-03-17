import { Component, ViewEncapsulation } from '@angular/core';
import { LayoutCodeExamples } from '../code-examples';
@Component({
  selector: 'layout-manager-sidenav',
  templateUrl: './layout-manager-sidenav.component.html',
  styleUrls: ['./layout-manager-sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutManagerSidenavComponent {
  LayoutCodeExamples = LayoutCodeExamples;
}
