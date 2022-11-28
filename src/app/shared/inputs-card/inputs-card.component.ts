import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'inputs-card',
  templateUrl: './inputs-card.component.html',
  styleUrls: ['./inputs-card.component.scss'],
  inputs: ['header: header', 'content: content', 'compName: comp-name'],
  encapsulation: ViewEncapsulation.None
})
export class InputsCardComponent {

  private header: string;
  private content: string;
  private compName: string;

}
