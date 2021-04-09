import { Component, Injector, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginService } from 'ontimize-web-ngx';
import { environment } from '../../environments/environment';
import { NavigationBarService } from '../shared/navigation-bar.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  protected sectionTitle = '';

  constructor(
    protected injector: Injector,
    protected navigationService: NavigationBarService) {
    const loginService = this.injector.get(LoginService);
    loginService.storeSessionInfo({
      id: 12345,
      user: 'playground'
    });
  }

  ngOnInit() {
    this.navigationService.onTitleChange((title) => {
      this.sectionTitle = title;
    });
  }
}
