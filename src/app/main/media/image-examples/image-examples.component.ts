import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';

const HTML_DATA = `
<o-row layout-align="space-around start" style="height:400px">
  <o-column fxFlex="30">
    <o-image attr="image1" data="http://placekitten.com/500/600" size-adjust="yes" fxFill></o-image>
  </o-column>
  <o-column fxFlex="30">
    <o-image attr="image2" data="http://placekitten.com/500/600" fxFill height-image="300" width-image="300"></o-image>
  </o-column>
  <o-column fxFlex="30">
    <o-image attr="image3" data="http://placekitten.com/500/600" fxFill height-image="300"></o-image>
  </o-column>
  </o-row>
  <o-row layout-align="space-around" style="height:400px">
  <o-column fxFlex="30">
    <o-image attr="image4" data="http://placekitten.com/500/600" fxFill></o-image>
  </o-column>
  <o-column fxFlex="30">
    <o-image attr="image5" data="http://placekitten.com/500/600" size-adjust="no" fxFill height-image="300" width-image="300"></o-image>
  </o-column>
  <o-column fxFlex="30">
    <o-image attr="image6" data="http://placekitten.com/500/600" size-adjust="no" fxFill height-image="300"></o-image>
  </o-column>
</o-row>
`;

const TYPESCRIPT_DATA = `

`;

@Component({
  selector: 'image-examples',
  templateUrl: './image-examples.component.html',
  styleUrls: ['./image-examples.component.scss']
})
export class ImageExamplesComponent {

  constructor(

  ) {

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
        'data': TYPESCRIPT_DATA
      }
    };
  }



  onShowSource(key: string, exampleComp?: any) {
    return HTML_DATA;
  }


}
