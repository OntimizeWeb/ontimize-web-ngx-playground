import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  constructor(protected navigationService: NavigationBarService) {

  }

  ngOnInit() {
    this.navigationService.onTitleChange((title) => {
      this.sectionTitle = title;
    });
  }
}
