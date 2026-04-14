import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OTranslatePipe } from 'ontimize-web-ngx';
import { InputsCardComponent } from '../../../shared/inputs-card/inputs-card.component';

@Component({
  standalone: true,
  imports: [RouterLink, InputsCardComponent, OTranslatePipe],
  selector: 'app-media-home',
  templateUrl: './media-home.component.html',
  styleUrls: ['./media-home.component.scss']
})
export class MediaHomeComponent { }
