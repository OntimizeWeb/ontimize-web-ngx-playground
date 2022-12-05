import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../theme.service';

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

  constructor(protected _themeService: ThemeService) {
    _themeService.onThemeUpdate.subscribe(() => {
      const currentTheme = this._themeService.getStoredTheme();
      currentTheme.isDark ? this.dark = true : this.dark = false;
    });
  }

  ngOnInit(): void {
    const currentTheme = this._themeService.getStoredTheme();
    currentTheme.isDark ? this.dark = true : this.dark = false;
  }



}
