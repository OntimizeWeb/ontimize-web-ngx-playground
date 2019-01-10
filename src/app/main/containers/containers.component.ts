import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { ExampleComponent } from '../../shared/example/example.component';
import { NavigationBarService } from '../../shared/navigation-bar.service';


const HTML_DATA = `
<{layout} attr="container" title="{title}" icon="{icon}" layout-align="{layoutAlign}" elevation="{elevation}">
  <div layout-padding style="background-color:#3498db;">One</div>
  <div layout-padding style="background-color:#e74c3c;">Two</div>
  <div layout-padding style="background-color:#f9c922;">Three</div>
</{layout}>
`;

const TYPESCRIPT_DATA = ``;

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.app-containers]': 'true'
  }
})
export class ContainersComponent implements OnInit {

  public layout: string = 'row';
  protected layoutHorizontal = 'start';
  protected layoutVertical = 'stretch';

  @ViewChild('title')
  public titleInput: any;

  @ViewChild('elevation')
  public elevationInput: any;

  @ViewChild('icon')
  public iconInput: any;

  public dataHorizontal: Array<any> = [
    { 'value': 'start', 'label': 'start (default)', 'checked': true },
    { 'value': 'center', 'label': 'center', 'checked': false },
    { 'value': 'end', 'label': 'end', 'checked': false },
    { 'value': 'space-around', 'label': 'space-around', 'checked': false },
    { 'value': 'space-between', 'label': 'space-between', 'checked': false },
    { 'value': 'space-evenly', 'label': 'space-evenly', 'checked': false }
  ];

  public dataVertical: Array<any> = [
    { 'value': 'start', 'label': 'start', 'checked': false },
    { 'value': 'center', 'label': 'center', 'checked': false },
    { 'value': 'end', 'label': 'end', 'checked': false },
    { 'value': 'stretch', 'label': 'stretch (default)', 'checked': true }
  ];

  constructor(protected navigationService: NavigationBarService) { }

  ngOnInit() {
    this.navigationService.setTitle('Layout > Child alignment');
  }

  getLayoutAlign() {
    return this.layoutHorizontal + ' ' + this.layoutVertical;
  }

  onLayoutHorizontalChange(evt) {
    this.layoutHorizontal = evt.value;
  }

  onLayoutVerticalChange(evt) {
    this.layoutVertical = evt.value;
  }

  getMainDirection() {
    return this.layout === 'row' ? 'horizontal' : 'vertical';
  }

  getSecondaryDirection() {
    return this.layout === 'column' ? 'horizontal' : 'vertical';
  }

  getFiles() {
    return {
      'html': {
        'data': this.getHTML()
      },
      'scss': {
        'data': undefined
      },
      'typescript': {
        'data': TYPESCRIPT_DATA
      }
    };
  }

  onShowSource(exampleComp: ExampleComponent) {
    exampleComp.html = this.getHTML();
  }

  getHTML() {
    return HTML_DATA
      .replace(new RegExp('{layout}', 'g'), 'o-' + this.layout)
      .replace('{title}', this.titleInput.nativeElement.value)
      .replace('{icon}', this.iconInput.nativeElement.value)
      .replace('{layoutAlign}', this.getLayoutAlign())
      .replace('{elevation}', this.elevationInput.nativeElement.value);
  }

}
