import { Component, Injector, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'ontimize-web-ngx';

import { NavigationBarService } from '../shared/navigation-bar.service';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  protected sectionTitle = '';

  private light: boolean = true;

  constructor(
    protected injector: Injector,
    protected navigationService: NavigationBarService,
    protected _themeService: ThemeService
  ) {
    const authService = this.injector.get(AuthService);
    authService.storeSessionInfo({
      id: 12345,
      user: 'playground'
    });

  }

  ngOnInit() {
    this.navigationService.onTitleChange((title) => {
      this.sectionTitle = title;
    });

  }

  light_mode() {
    const currentTheme = this._themeService.getStoredTheme();
    currentTheme.isDark = false;
    this._themeService.installTheme(currentTheme);
  }

  dark_mode() {
    const currentTheme = this._themeService.getStoredTheme();
    currentTheme.isDark = true;
    this._themeService.installTheme(currentTheme);
  }

}
