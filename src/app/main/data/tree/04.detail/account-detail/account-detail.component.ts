import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'account-detail',
  templateUrl: './account-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.account-detail]': 'true'
  }
})
export class AccountDetailComponent {

}
