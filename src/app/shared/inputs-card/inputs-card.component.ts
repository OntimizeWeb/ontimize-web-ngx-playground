import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'inputs-card',
  templateUrl: './inputs-card.component.html',
  styleUrls: ['./inputs-card.component.scss'],
  inputs: ['header: header', 'content: content', 'compName: comp-name', "new: new"],
  encapsulation: ViewEncapsulation.None
})
export class InputsCardComponent {

  public header: string;
  public content: string;
  public compName: string;
  public new: boolean = false;

}
