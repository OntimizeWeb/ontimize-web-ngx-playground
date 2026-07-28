import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppearanceService } from 'ontimize-web-ngx';

import { NavigationBarService } from '../shared/navigation-bar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  protected sectionTitle = '';

  public light: boolean;

  constructor(
    protected navigationService: NavigationBarService,
    protected appeareanceService: AppearanceService
  ) {
  }

  ngOnInit() {
    this.navigationService.onTitleChange((title) => {
      this.sectionTitle = title;
    });
    this.light = !this.appeareanceService.isDarkMode();
  }

  setDarkMode(darkMode: boolean) {
    this.appeareanceService.setDarkMode(darkMode)
  }



}
