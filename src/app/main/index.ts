import { ButtonsModule } from './buttons/buttons.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { ComboModule } from './combo/combo.module';
import { ContainersModule } from './containers/containers.module';
import { DialogsModule } from './dialogs/dialogs.module';
import { HomeModule } from './home/home.module';
import { InputsModule } from './inputs/inputs.module';
import { ListsModule } from './lists/lists.module';

import { MainModule } from './main.module';

export const MAIN_MODULES = [
  MainModule,
  ButtonsModule,
  CheckboxModule,
  ComboModule,
  ContainersModule,
  DialogsModule,
  HomeModule,
  InputsModule,
  ListsModule
];
