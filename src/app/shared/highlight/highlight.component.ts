import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { HighlightAutoResult, HighlightLoader, HighlightModule } from 'ngx-highlightjs';
import { AppearanceService } from 'ontimize-web-ngx';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  standalone: true,
  imports: [HighlightModule, MatButtonModule, ClipboardModule, MatIconModule],
  selector: 'highlight-comp',
  styleUrls: ['./highlight.component.scss'],
  templateUrl: './highlight.component.html',
  inputs: [
    'templateContent: template-content',
    'templateType: template-type'
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighlightComponent implements OnInit {

  templateContent;
  templateType;
  templateTypeArray: Array<string>;

  private onThemeUpdate: Subscription;
  response: HighlightAutoResult;

  constructor(
    protected elRef: ElementRef,
    private hljsLoader: HighlightLoader,
    private appearanceService: AppearanceService
  ) {
    this.loadTheme(this.appearanceService.isDarkMode());
    this.onThemeUpdate = this.appearanceService.isDarkMode$.subscribe((darkMode: boolean) => {
      this.loadTheme(darkMode);
    });
  }

  loadTheme(darkMode: boolean) {
    this.hljsLoader.setTheme(darkMode ? 'assets/hightlight/github-dark.css' : 'assets/hightlight/github.css');
  }
  ngOnInit(): void {
    this.templateTypeArray = this.parseTemplateType();


  }

  showTooltip() {
    // TODO show tooltip (solve problem of repainting that does not show tooltip)
    alert('Copied!');
  }

  parseTemplateType() {
    return [this.templateType === 'scss' ? 'css' : this.templateType];
  }

  ngOnDestroy(): void {
    this.onThemeUpdate.unsubscribe();
  }


}
