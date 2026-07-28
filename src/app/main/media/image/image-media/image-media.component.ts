import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ExampleComponent } from '../../../../shared/example/example.component';

const HTML_DATA = `
  <o-image attr="image" data="http://placekitten.com/1920/1080" height="{height}" width="{width}"
    auto-fit="{autoFit}" enabled="{enabled}" read-only="{readOnly}" show-controls="{showControl}"
    full-screen-button="{showFullscreen}" empty-image="./assets/images/no-image.png"></o-image>
`;

@Component({
  selector: 'image',
  templateUrl: './image-media.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ImageMediaComponent {

  html: string;

  @ViewChild('showControlToggle')
  showControlToggle: any = true;

  @ViewChild('showFullscreenToggle')
  showFullscreenToggle: any = false;

  @ViewChild('autoFitToggle')
  autoFitToggle: any = false;

  @ViewChild('readOnlyToggle')
  readOnlyToggle: any = false;

  @ViewChild('enabledToggle')
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

  updateCodeValue(key: string, value: string) {
    const itemData: any = {
      showControl: this.showControlToggle.checked,
      showFullscreen: this.showFullscreenToggle.checked,
      autoFit: this.autoFitToggle.checked,
      height: this.height ? this.height : '',
      width: this.width ? this.width : '',
      enabled: this.enabledToggle.checked,
      readOnly: this.readOnlyToggle.checked
    };
    for (let item in itemData) {
      if (item === key) {
        item = value;
      }
    }
    this.html = ImageMediaComponent.getHtml(itemData);
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
    this.html = ImageMediaComponent.getHtml(itemData);
  }

}
