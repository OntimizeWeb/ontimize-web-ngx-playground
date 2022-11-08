import { Component, Injector, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'ontimize-web-ngx';

import { NavigationBarService } from '../shared/navigation-bar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  protected sectionTitle = '';
  private headerTitle: string;

  constructor(
    protected injector: Injector,
    protected navigationService: NavigationBarService,
    private router: Router) {
    const authService = this.injector.get(AuthService);
    authService.storeSessionInfo({
      id: 12345,
      user: 'playground'
    });
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.headerTitle = this.router.url.split("/")[2].substring(0, 1).toUpperCase() +
          this.router.url.split("/")[2].substring(1, this.router.url.split("/")[this.router.url.split("/").length - 1].length);
      }

    });
  }

  ngOnInit() {
    this.navigationService.onTitleChange((title) => {
      this.sectionTitle = title;
    });
  }


}
