import {
  MenuRootItem,
  MenuGroup,
  MenuItem
} from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  {
    id: 'input',
    name: 'INPUT',
    icon: 'input',
    opened: false,
    items: [
      { id: 'inputs', name: 'INPUTS', route: '/main/inputs', icon: 'border_color' },
      { id: 'checkbox', name: 'CHECKBOX', route: '/main/checkbox', icon: 'check_circle' },
      { id: 'combo', name: 'COMBO', route: '/main/combo', icon: 'people' }
    ]
  },
  {
    id: 'button',
    name: 'BUTTON',
    icon: 'people',
    opened: false,
    items: [
      { id: 'buttons', name: 'BUTTONS', route: '/main/buttons', icon: 'people' }
    ]
  },
  {
    id: 'data',
    name: 'DATA',
    icon: 'storage',
    opened: false,
    items: [
      { id: 'list', name: 'LIST', route: '/main/lists', icon: 'list' },
      { id: 'table', name: 'TABLE', route: '/main/table', icon: 'storage' }
    ]
  },
  {
    id: 'layout',
    name: 'LAYOUT',
    icon: 'layers',
    opened: false,
    items: [
      { id: 'containers', name: 'CONTAINERS', route: '/main/containers', icon: 'format_align_center' }
    ]
  },
  {
    id: 'modals',
    name: 'MODALS',
    icon: 'crop_landscape',
    opened: false,
    items: [
      { id: 'dialogs', name: 'DIALOGS', route: '/main/dialogs', icon: 'mode_comment' },
      { id: 'snackbar', name: 'SNACKBAR', route: '/main/snackbar', icon: 'announcement' },
      { id: 'contextmenu', name: 'CONTEXTMENU', route: '/main/contextmenu', icon: 'menu' }
    ]
  }
];
