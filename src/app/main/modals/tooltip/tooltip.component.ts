import { Component, OnInit, ViewChild } from '@angular/core';
import { OTranslateService } from 'ontimize-web-ngx';

import { NavigationBarService } from '../../../shared/navigation-bar.service';
import { ExampleComponent } from '../../../shared/example/example.component';

const HTML_DATA = `
<o-text-input attr="input2" label="{{ 'INPUT.BUTTON.TEXT' | oTranslate }}" read-only="no" tooltip="{tooltip}"
tooltip-position="{tooltipPosition}" tooltip-show-delay="{tooltipShowDelay}" tooltip-hide-delay="{tooltipHideDelay}"></o-text-input>
`;

@Component({
  selector: 'app-tooltip',
  templateUrl: 'tooltip.component.html',
  styleUrls: ['tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  html: string;

  @ViewChild('tooltipInput', { static: true })
  public tooltip: any;
  @ViewChild('matSelect', { static: true })
  public position: any;
  @ViewChild('showDelayInput', { static: true })
  public showDelay: any;
  @ViewChild('hideDelayInput', { static: true })
  public hideDelay: any;

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService
  ) { }

  positionOptions = ['below', 'after', 'before', 'above', 'left', 'right'];

  ngOnInit() {
    const title = this.translateService.get('TOOLTIP');
    this.navigationService.setTitle(title);
  }

  updateCodeValue(exampleComp: ExampleComponent, key: string, value) {
    let htmlData: string = HTML_DATA;
    htmlData = htmlData.replace("{" + key + "}", value);
    this.html = htmlData.replace('{tooltip}', this.tooltip.nativeElement.value)
      .replace('{tooltipPosition}', this.position.nativeElement.value)
      .replace('{tooltipShowDelay}', this.showDelay.nativeElement.value)
      .replace('{tooltipHideDelay}', this.hideDelay.nativeElement.value);
  }

  onShowSource(exampleComp: ExampleComponent, tooltip: string, position: string, showDelay: string, hideDelay: string) {
    let tpl = HTML_DATA;
    tpl = tpl.replace('{tooltip}', tooltip)
      .replace('{tooltipPosition}', position)
      .replace('{tooltipShowDelay}', showDelay)
      .replace('{tooltipHideDelay}', hideDelay);
    this.html = tpl;
  }



}
