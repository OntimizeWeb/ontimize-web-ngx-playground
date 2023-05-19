import { Component } from '@angular/core';

const HTML_DATA = `
<div fxLayout="row">
  <o-column fxFlex="30" title="Auto fit">
    <o-image attr="image1" data="http://placekitten.com/300/200" show-controls="no" fxFill></o-image>
  </o-column>
  <o-column fxFlex="30" title="Auto fit in the dimension of 200*300px">
    <o-image attr="image2" data="http://placekitten.com/300/200" width="200px" height="300px" show-controls="no"></o-image>
  </o-column>
  <o-column fxFlex="30" title="Auto fit in height=300px">
    <o-image attr="image3" data="http://placekitten.com/300/200" height="300px" show-controls="no"></o-image>
  </o-column>
</div>
<div fxLayout="row">
  <o-column fxFlex="30" title="Disabled auto fit">
    <o-image attr="image4" data="http://placekitten.com/300/200" auto-fit="no" show-controls="no" fxFill></o-image>
  </o-column>
  <o-column fxFlex="30" title="Disabled Auto fit in the dimension of 200*300px ">
    <o-image attr="image5" data="http://placekitten.com/300/200" auto-fit="no" height="300px" width="200px" show-controls="no"></o-image>
  </o-column>
  <o-column fxFlex="30" title="Disabled Auto fit in height=200px'">
    <o-image attr="image6" data="http://placekitten.com/300/200" auto-fit="no" height="200px" show-controls="no"></o-image>
  </o-column>
</div>
`;

@Component({
  selector: 'image-examples',
  styleUrls: ['./image-examples.component.scss'],
  templateUrl: './image-examples.component.html'
})
export class ImageExamplesComponent {

  public dataBase64 = "data:image/png;base64,iV BORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHd hcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHjSURBVDjLdZO/alVBEMZ/5+TemxAbFUUskqAoSOJNp4KC 4AsoPoGFIHY+gA+jiJXaKIiChbETtBYLUbSMRf6Aydndmfks9kRjvHdhGVh2fvN9uzONJK7fe7Ai6algA 3FZCAmQqEF/dnihpK1v7x7dPw0woF64Izg3Xl5s1n9uIe0lQYUFCtjc+sVuEqHBKfpVAXB1vLzQXFtdYP HkGFUCoahVo1Y/fnie+bkBV27c5R8A0pHxyhKvPn5hY2MHRQAQeyokFGJze4cuZfav3gLNYDTg7Pklzpw 4ijtIQYRwFx6BhdjtCk+erU0CCPfg+/o2o3ZI13WUlLGo58YMg+GIY4dmCWkCAAgPzAspJW5ePFPlV3VI 4uHbz5S5IQfy/yooHngxzFser30iFcNcuAVGw3A0Ilt91IkAsyCXQg5QO0szHEIrogkiguwN2acCoJhjn ZGKYx4Ujz5WOA2YD1BMU+BBSYVUvNpxkXuIuWgbsOxTHrG3UHIFWIhsgXtQQpTizNBS5jXZQkhkcywZqQ QlAjdRwiml7wU5xWLaL1AvZa8WIjALzIRZ7YVWDW5CiIj48Z8F2pYLl1ZR0+AuzEX0UX035mxIkLq0dhD w5vXL97fr5O3rfwQHJhPx4uuH57f2AL8BfPrVlrs6xwsAAAAASUVORK5CYII=";

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

  onShowSource(key: string, exampleComp?: any) {
    return HTML_DATA;
  }

}
