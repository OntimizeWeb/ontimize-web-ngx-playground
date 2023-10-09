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
export class HighlightComponent implements OnInit, OnDestroy {

  protected clipboard: any;
  templateContent;
  templateType;
  templateTypeArray: Array<string>;

  constructor(protected elRef: ElementRef) {
  }

  ngOnInit(): void {
    this.templateTypeArray = this.parseTemplateType();

    if (window['Clipboard'] && !this.clipboard) {
      const copyBtn = this.elRef.nativeElement.querySelectorAll('button#copy-btn');
      if (copyBtn.length) {
        const self = this;
        const element = copyBtn[0];
        this.clipboard = new window['Clipboard'](element);
        this.clipboard.on('success', function (e) {
          self.showTooltip(e.trigger, 'Copied!');
        });
        // this.clipboard.on('error', function(e) {
        //     console.log(e);
        // });
      }

    }
  }

  showTooltip(elem, msg) {
    // TODO show tooltip (solve problem of repainting that does not show tooltip)
    alert('Copied!');
  }

  parseTemplateType() {
    return [this.templateType === 'scss' ? 'css' : this.templateType];
  }

  ngOnDestroy() {
    if (this.clipboard) {
      this.clipboard.destroy();
    }
  }

}
