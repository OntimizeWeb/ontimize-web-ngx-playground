import { Component, ViewChild } from '@angular/core';

import { MdRadioGroup } from '@angular/material';


@Component({
  selector: 'containers-home',
  moduleId: module.id,
  styleUrls: ['containers-home.component.css'],
  templateUrl: 'containers-home.component.html'
})
export class ContainersHomeComponent {

  protected layoutHorizontal: string = "start";
  protected layoutVertical: string = "stretch";

  protected dataHorizontal: Array<Object> = [];
  protected dataVertical: Array<Object> = [];

  constructor() {
  }

  ngOnInit() {
    this.dataHorizontal = [
      { "value": "none", "label": "none", "checked": false },
      { "value": "start", "label": "start (default)", "checked": true },
      { "value": "center", "label": "center", "checked": false },
      { "value": "end", "label": "end", "checked": false },
      { "value": "space-around", "label": "space-around", "checked": false },
      {"value": "space-between", "label": "space-between", "checked": false}
    ];
    this.dataVertical = [
      { "value": "none", "label": "none", "checked": false },
      { "value": "start", "label": "start", "checked": false },
      { "value": "center", "label": "center", "checked": false },
      { "value": "end", "label": "end", "checked": false },
      { "value": "stretch", "label": "stretch (default)", "checked": true }
    ];
  }

  getLayoutAlign() {
    return this.layoutHorizontal + " " + this.layoutVertical;
  }

  onLayoutHorizontalChange(evt, layHor: MdRadioGroup) {
    var self = this;
    window.setTimeout(() => {
      self.layoutHorizontal = evt.value;
    }, 0);
  }

   onLayoutVerticalChange(evt, layHor: MdRadioGroup) {
    var self = this;
    window.setTimeout(() => {
      self.layoutVertical = evt.value;
    }, 0);
  }

}
