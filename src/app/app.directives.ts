import { MainComponent } from './+main';
import { HOME_DIRECTIVES } from './+main/+home';
import { BUTTONS_DIRECTIVES } from './+main/+buttons';
import { CHECKBOX_DIRECTIVES } from './+main/+checkbox';
import { COMBO_DIRECTIVES } from './+main/+combo';
import { CONTAINERS_DIRECTIVES } from './+main/+containers';
import { DIALOGS_DIRECTIVES } from './+main/+dialogs';
import { INPUTS_DIRECTIVES } from './+main/+inputs';
import { LISTS_DIRECTIVES } from './+main/+lists';
// import { TABLES_DIRECTIVES } from './+main/+tables';
import { SHARED_DIRECTIVES } from './shared';


// All directives of the application
export const APP_DIRECTIVES: any = [
  MainComponent,
  HOME_DIRECTIVES,
  BUTTONS_DIRECTIVES,
  CHECKBOX_DIRECTIVES,
  COMBO_DIRECTIVES,
  CONTAINERS_DIRECTIVES,
  DIALOGS_DIRECTIVES,
  INPUTS_DIRECTIVES,
  LISTS_DIRECTIVES,
  // TABLES_DIRECTIVES,
  SHARED_DIRECTIVES
];
