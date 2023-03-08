import { Component, OnInit } from '@angular/core';
import { OTranslateService } from 'ontimize-web-ngx';
import { Subscription } from 'rxjs';
import { NavigationBarService } from '../../shared/navigation-bar.service';
import { DocsSiteTheme, ThemeService } from '../../shared/theme.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  is_dark_theme: boolean;
  private onThemeUpdate: Subscription;

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService,
    protected themeService: ThemeService) {
  }

  ngOnInit() {
    let title = '';
    title = this.translateService.get('INTRODUCTION');
    this.navigationService.setTitle(title);
    this.onThemeUpdate = this.themeService.onThemeUpdate.subscribe((theme: DocsSiteTheme) => {
      this.is_dark_theme = theme.isDark;
    });
  }

  ngOnDestroy(): void {
    this.onThemeUpdate.unsubscribe();
  }
}
