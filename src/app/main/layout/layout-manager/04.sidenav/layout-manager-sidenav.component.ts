import { Component } from '@angular/core';
import { LayoutCodeExamples } from '../code-examples';
@Component({
  selector: 'layout-manager-sidenav',
  templateUrl: './layout-manager-sidenav.component.html'
})
export class LayoutManagerSidenavComponent {
  LayoutCodeExamples = LayoutCodeExamples;
}
