import { Component, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
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
  private onThemeUpdate: Subscription;

  constructor(protected _themeService: ThemeService) {
    this.onThemeUpdate = _themeService.onThemeUpdate.subscribe(() => {
      const currentTheme = this._themeService.getStoredTheme();
      currentTheme.isDark ? this.dark = true : this.dark = false;
    });
  }

  ngOnInit(): void {
    const currentTheme = this._themeService.getStoredTheme();
    currentTheme.isDark ? this.dark = true : this.dark = false;
  }

  ngOnDestroy(): void {
    this.onThemeUpdate.unsubscribe();
  }

}
