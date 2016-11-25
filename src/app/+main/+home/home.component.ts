import { Component, OnInit } from '@angular/core';

import { NavigationBarService } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(protected navigationService: NavigationBarService) {
  }

  ngOnInit() {
     this.navigationService.setTitle('Introduction')
  }


}
