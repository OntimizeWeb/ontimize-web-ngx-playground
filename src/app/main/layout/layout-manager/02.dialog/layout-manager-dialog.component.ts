import { Component } from '@angular/core';
import { LayoutCodeExamples } from '../code-examples';
@Component({
  selector: 'layout-manager-dialog',
  templateUrl: './layout-manager-dialog.component.html'
})
export class LayoutManagerDialogComponent {
  LayoutCodeExamples = LayoutCodeExamples;
}
