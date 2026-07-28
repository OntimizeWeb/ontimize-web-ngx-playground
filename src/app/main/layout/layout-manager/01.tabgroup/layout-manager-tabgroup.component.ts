import { Component } from '@angular/core';
import { LayoutCodeExamples } from '../code-examples';
@Component({
  selector: 'layout-manager-tabgroup',
  templateUrl: './layout-manager-tabgroup.component.html',
  styleUrls: ['./layout-manager-tabgroup.component.scss']
})
export class LayoutManagerTabgroupComponent {
  LayoutCodeExamples = LayoutCodeExamples;
}
