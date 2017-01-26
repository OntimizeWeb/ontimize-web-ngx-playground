import { Routes } from '@angular/router';

import {MainComponent} from './main.component';
import {
  HomeRoutes
} from './+home/home.routes';
import { ButtonsRoutes } from './+buttons/buttons.routes';
import { CheckboxRoutes } from './+checkbox/checkbox.routes';
import { ComboRoutes } from './+combo/combo.routes';
import { ContainersRoutes } from './+containers/containers.routes';
import { DialogsRoutes } from './+dialogs/dialogs.routes';
import { InputsRoutes} from './+inputs/inputs.routes';

export const AppRoutes: Routes = [
  {
    path: 'main', component: MainComponent,
    children: [
      ...HomeRoutes,
      ...ButtonsRoutes,
      ...CheckboxRoutes,
      ...ComboRoutes,
      ...ContainersRoutes,
      ...DialogsRoutes,
      ...InputsRoutes,
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];



