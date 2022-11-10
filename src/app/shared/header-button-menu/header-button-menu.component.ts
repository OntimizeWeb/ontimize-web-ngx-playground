import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ButtonsComponent } from '../../main/buttons/buttons.component';
import { ExpandedStateService } from '../services/expanded-state.service';

@Component({
  selector: 'header-button-menu',
  templateUrl: './header-button-menu.component.html',
  styleUrls: ['./header-button-menu.component.scss'],
  inputs: [
    'compName: comp-name',
    'compDesc: comp-desc'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderButtonMenuComponent implements OnInit {

  private compName: string;
  private compDesc: string;
  private expanded: boolean = true;

  constructor(
    protected expandedService: ExpandedStateService
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.expandedService.onStateChange((state) => {
      if (state) {
        this.expanded = true;
      }
      else {
        this.expanded = false;
      }
    });
  }

  expand() {
    this.expandedService.setState(true);
  }
}
