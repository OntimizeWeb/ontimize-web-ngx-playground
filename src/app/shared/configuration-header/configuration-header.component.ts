import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'configuration-header',
  templateUrl: './configuration-header.component.html',
  styleUrls: ['./configuration-header.component.scss'],
  inputs: ['compName: comp-name'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigurationHeaderComponent implements OnInit {

  private compName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
