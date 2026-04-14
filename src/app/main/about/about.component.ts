import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { environment } from '../../../environments/environment';

@Component({
  standalone: true,
  imports: [MatDividerModule],
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public vCore: string = environment.versions.core;
  public vGallery: string = environment.versions.gallery;
  public vExtraComponentes:string = environment.versions.extraComponentes
}
