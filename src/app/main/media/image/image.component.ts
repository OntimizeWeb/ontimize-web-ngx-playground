import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { OTranslatePipe } from 'ontimize-web-ngx';

import { CollapsibleMenuComponent } from '../../../shared/collapsible-menu/collapsible-menu.component';
import { HeaderButtonMenuComponent } from '../../../shared/header-button-menu/header-button-menu.component';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, MatButtonModule, CollapsibleMenuComponent, HeaderButtonMenuComponent, OTranslatePipe],
  selector: 'image',
  templateUrl: './image.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ImageComponent { }
