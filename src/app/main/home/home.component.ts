import { Component, OnInit } from '@angular/core';
import { AppearanceService, OButtonComponent, OColumnComponent, OTranslateService } from 'ontimize-web-ngx';
import { MatCardModule } from '@angular/material/card';
import { Subscription } from 'rxjs';
import { NavigationBarService } from '../../shared/navigation-bar.service';

@Component({
  standalone: true,
  imports: [OColumnComponent, OButtonComponent, MatCardModule],
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
