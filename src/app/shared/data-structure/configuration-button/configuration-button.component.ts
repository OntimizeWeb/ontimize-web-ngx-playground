import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfigCollapsibleStateService } from '../../services/config-collapsible-state.service';

@Component({
  selector: 'configuration-button',
  templateUrl: './configuration-button.component.html',
  styleUrls: ['./configuration-button.component.scss']
})
export class ConfigurationButtonComponent implements OnInit {

  @Output() confBtnClick: EventEmitter<string> = new EventEmitter<string>();

  public btnVisibility: boolean;

  constructor(protected configExpandedService: ConfigCollapsibleStateService) {
  }

  ngOnInit(): void {
    if (window.innerWidth >= 1920) {
      this.btnVisibility = false;
    }
    else {
      this.btnVisibility = true;
    }
    this.configExpandedService.onStateChange((val) => {
      this.btnVisibility = !val;
    });
  }

  toggle() {
    this.confBtnClick.emit("click");
  }
}
