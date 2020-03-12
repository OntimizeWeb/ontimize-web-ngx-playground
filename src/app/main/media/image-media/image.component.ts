import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

const HTML_DATA = `
  <o-image attr="image" data="http://placekitten.com/1920/1080" height="{height}" width="{width}"
    auto-fit="{autoFit}" enabled="{enabled}" read-only="{readOnly}" show-controls="{showControl}"
    full-screen-button="{showFullscreen}" empty-image="./assets/images/no-image.png"></o-image>
`;

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ImageComponent {

  @ViewChild('showControlToggle', { static: false })
  showControlToggle: any = true;

  @ViewChild('showFullscreenToggle', { static: false })
  showFullscreenToggle: any = false;

  @ViewChild('autoFitToggle', { static: false })
  autoFitToggle: any = false;

  @ViewChild('readOnlyToggle', { static: false })
  readOnlyToggle: any = false;

  @ViewChild('enabledToggle', { static: false })
  enabledToggle: any = false;

  height = '';
  width = '';

  files = {
    'html': {
      'data': HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': undefined
    }
  };

  public static getHtml(data: any) {
    let tpl = HTML_DATA;
    tpl = tpl.replace('{showControl}', data.showControl)
      .replace('{autoFit}', data.autoFit)
      .replace('{enabled}', data.enabled)
      .replace('{readOnly}', data.readOnly)
      .replace('{showFullscreen}', data.showFullscreen);

    if (data.height && data.height.length) {
      tpl = tpl.replace('{height}', data.height);
    } else {
      tpl = tpl.replace('height="{height}"', '');
    }

    if (data.width && data.width.length) {
      tpl = tpl.replace('{width}', data.width);
    } else {
      tpl = tpl.replace('width="{width}"', '');
    }

    return tpl;
  }

  onShowSource(key: string, exampleComp: any) {
    const itemData: any = {
      showControl: this.showControlToggle.checked,
      showFullscreen: this.showFullscreenToggle.checked,
      autoFit: this.autoFitToggle.checked,
      height: this.height ? this.height : '',
      width: this.width ? this.width : '',
      enabled: this.enabledToggle.checked,
      readOnly: this.readOnlyToggle.checked
    };
    exampleComp.html = ImageComponent.getHtml(itemData);
  }

}
