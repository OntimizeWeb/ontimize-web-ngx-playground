import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppearanceService, OAppLayoutComponent, OAppLayoutHeaderComponent } from 'ontimize-web-ngx';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { NavigationBarService } from '../shared/navigation-bar.service';

const DENSITY_CLASSES: Map<number, string> = new Map([
  [0, 'density-0'],
  [-1, 'density-m1'],
  [-2, 'density-m2'],
  [-3, 'density-m3'],
  [-4, 'density-m4'],
  [-5, 'density-m5'],
]);

const DENSITY_KEY = 'app-density';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    OAppLayoutComponent,
    OAppLayoutHeaderComponent,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  protected sectionTitle = '';

  public light: boolean;

  readonly densityOptions = [
    { value:  0, label: 'Comfortable (0)' },
    { value: -1, label: 'Comfortable (-1)' },
    { value: -2, label: 'Standard (-2)' },
    { value: -3, label: 'Compact (-3)' },
    { value: -4, label: 'Compact (-4)' },
    { value: -5, label: 'Dense (-5)' },
  ];

  currentDensity: number;

  constructor(
    protected navigationService: NavigationBarService,
    protected appeareanceService: AppearanceService
  ) {
    const saved = localStorage.getItem(DENSITY_KEY);
    this.currentDensity = saved !== null ? Number(saved) : -4;
  }

  ngOnInit() {
    this.navigationService.onTitleChange((title) => {
      this.sectionTitle = title;
    });
    this.light = !this.appeareanceService.isDarkMode();
    this.applyDensityClass(this.currentDensity);
  }

  setDarkMode(darkMode: boolean) {
    this.appeareanceService.setDarkMode(darkMode);
  }

  setDensity(scale: number) {
    this.currentDensity = scale;
    localStorage.setItem(DENSITY_KEY, String(scale));
    this.applyDensityClass(scale);
  }

  private applyDensityClass(scale: number) {
    const body = document.body;
    DENSITY_CLASSES.forEach((cls) => body.classList.remove(cls));
    const cls = DENSITY_CLASSES.get(scale);
    if (cls) body.classList.add(cls);
  }
}
