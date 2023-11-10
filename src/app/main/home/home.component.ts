import { Component, OnInit } from '@angular/core';
import { AppearanceService, OTranslateService } from 'ontimize-web-ngx';
import { Subscription } from 'rxjs';
import { NavigationBarService } from '../../shared/navigation-bar.service';

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
    protected appearanceService: AppearanceService) {
  }

  ngOnInit() {
    let title = '';
    title = this.translateService.get('INTRODUCTION');
    this.navigationService.setTitle(title);
    this.is_dark_theme = this.appearanceService.isDarkMode();
    this.onThemeUpdate = this.appearanceService.isDarkMode$.subscribe((darkMode: boolean) => {
      this.is_dark_theme = darkMode;
    });
  }

  ngOnDestroy(): void {
    this.onThemeUpdate.unsubscribe();
  }
}
