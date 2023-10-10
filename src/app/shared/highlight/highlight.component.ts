import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ElementRef,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'highlight-comp',
  styleUrls: ['./highlight.component.scss'],
  templateUrl: './highlight.component.html',
  inputs: [
    'templateContent: template-content',
    'templateType: template-type'
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighlightComponent implements OnInit {

  templateContent;
  templateType;
  templateTypeArray: Array<string>;

  constructor(protected elRef: ElementRef) {
  }

  ngOnInit(): void {
    this.templateTypeArray = this.parseTemplateType();


  }

  showTooltip() {
    // TODO show tooltip (solve problem of repainting that does not show tooltip)
    alert('Copied!');
  }

  parseTemplateType() {
    return [this.templateType === 'scss' ? 'css' : this.templateType];
  }



}
