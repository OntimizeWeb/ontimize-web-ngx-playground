import { Component, Injector, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService, LoginStorageService } from 'ontimize-web-ngx';

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

  public light: boolean;

  constructor(
    protected injector: Injector,
    protected navigationService: NavigationBarService,
    protected _themeService: ThemeService
  ) {
    const authService = this.injector.get(LoginStorageService);
    authService.storeSessionInfo({
      id: 12345,
      user: 'playground'
    });

  }

  ngOnInit() {
    this.navigationService.onTitleChange((title) => {
      this.sectionTitle = title;
    });
    const currentTheme = this._themeService.getStoredTheme();
    if (currentTheme.isDark) {
      this.light = false;
    }
    else {
      this.light = true;
    }
  }

  light_mode() {
    const currentTheme = this._themeService.getStoredTheme();
    currentTheme.isDark = false;
    this._themeService.installTheme(currentTheme);
    this.light = true;
  }

  dark_mode() {
    const currentTheme = this._themeService.getStoredTheme();
    currentTheme.isDark = true;
    this._themeService.installTheme(currentTheme);
    this.light = false;
  }

}
