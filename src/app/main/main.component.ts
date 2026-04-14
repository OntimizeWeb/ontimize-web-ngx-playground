import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppearanceService, OAppLayoutComponent, OAppLayoutHeaderComponent } from 'ontimize-web-ngx';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { NavigationBarService } from '../shared/navigation-bar.service';

@Component({
  standalone: true,
  imports: [RouterOutlet, OAppLayoutComponent, OAppLayoutHeaderComponent, MatButtonModule, MatMenuModule, MatIconModule],
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
