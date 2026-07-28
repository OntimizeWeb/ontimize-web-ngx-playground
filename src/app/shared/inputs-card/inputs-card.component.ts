import { Component, ViewEncapsulation } from '@angular/core';
import { AppearanceService } from 'ontimize-web-ngx';
import { Subscription } from 'rxjs';

@Component({
  selector: 'inputs-card',
  templateUrl: './inputs-card.component.html',
  styleUrls: ['./inputs-card.component.scss'],
  inputs: ['header: header', 'content: content', 'compName: comp-name', "new: new"],
  encapsulation: ViewEncapsulation.None
})
export class InputsCardComponent {

  public header: string;
  public content: string;
  public compName: string;
  public new: boolean = false;
  public dark: boolean;
  private onThemeUpdate: Subscription;

  constructor(protected appearanceService: AppearanceService) {
    this.dark = appearanceService.isDarkMode();
    this.onThemeUpdate = appearanceService.isDarkMode$.subscribe((darkMode: boolean) => {
      this.dark = darkMode;

    });
  }


  ngOnDestroy(): void {
    this.onThemeUpdate.unsubscribe();
  }

}
