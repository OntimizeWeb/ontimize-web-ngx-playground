import { Component } from '@angular/core';
import { LayoutCodeExamples } from '../code-examples';
@Component({
  selector: 'layout-manager-dialog',
  templateUrl: './layout-manager-dialog.component.html',
  styleUrls: ['./layout-manager-dialog.component.scss']
})
export class LayoutManagerDialogComponent {
  LayoutCodeExamples = LayoutCodeExamples;
}
