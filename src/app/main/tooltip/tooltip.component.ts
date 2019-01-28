import { Component, OnInit } from '@angular/core';
import { OTranslateService } from 'ontimize-web-ngx';
import { NavigationBarService } from '../../shared/navigation-bar.service';

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

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService
  ) { }

  positionOptions = ['below', 'after', 'before', 'above', 'left', 'right'];

  ngOnInit() {
    const title = this.translateService.get('TOOLTIP');
    this.navigationService.setTitle(title);
  }

  onShowSource(exampleComp: any, tooltip: string, position: string, showDelay: string, hideDelay: string) {
    let tpl = HTML_DATA;
    tpl = tpl.replace('{tooltip}', tooltip)
      .replace('{tooltipPosition}', position)
      .replace('{tooltipShowDelay}', showDelay)
      .replace('{tooltipHideDelay}', hideDelay);
    exampleComp.html = tpl;
  }



}
