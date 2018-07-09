import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

const HTML_DATA = `
<o-image attr="image1" data="http://placekitten.com/300/600" [show-controls]="{showControl}" 
[height-image]="{height}" [width-image]="{width}" [size-adjust]="{sizeAdjust}"
[enabled]="{enabled}" [read-only]="{readOnly}" empty-image="./assets/images/no-image.png"
></o-image>
`;

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageComponent implements OnInit {

  @ViewChild('showControlToggle')
  showControlToggle: any = true;

  @ViewChild('sizeAdjustToggle')
  sizeAdjustToggle: any = false;

  @ViewChild('readOnlyToggle')
  readOnlyToggle: any = false;

  @ViewChild('enabledToggle')
  enabledToggle: any = false;


  height = "";
  width = "";


  constructor(

  ) {

  }

  ngOnInit(): void {


  }



  getFiles() {
    return {
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
  }


  public static getHtml(data: any) {
    let tpl = HTML_DATA;


    tpl = tpl.replace('{showControl}', data.showControl)
      .replace('{height}', data.height)
      .replace('{width}', data.width)
      .replace('{sizeAdjust}', data.sizeAdjust)
      .replace('{enabled}', data.enabled)
      .replace('{readOnly}', data.readOnly)


    return tpl;
  }

  onShowSource(key: string, exampleComp: any) {
    const itemData: any = {
      showControl: this.showControlToggle.checked,
      sizeAdjust: this.sizeAdjustToggle.checked,
      height: this.height ? this.height : "",
      width: this.width ? this.width : "",
      enabled: this.enabledToggle.checked,
      readOnly: this.readOnlyToggle.checked
    };
    
    exampleComp.html = ImageComponent.getHtml(itemData);

  }
}
