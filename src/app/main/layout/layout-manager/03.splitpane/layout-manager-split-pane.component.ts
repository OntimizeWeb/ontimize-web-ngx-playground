import { Component, ViewEncapsulation } from '@angular/core';
import { LayoutCodeExamples } from '../code-examples';
@Component({
  selector: 'layout-manager-split-pane',
  templateUrl: './layout-manager-split-pane.component.html',
  styleUrls: ['layout-manager-split-pane.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutManagerSplitPaneComponent {
  LayoutCodeExamples = LayoutCodeExamples;
}
