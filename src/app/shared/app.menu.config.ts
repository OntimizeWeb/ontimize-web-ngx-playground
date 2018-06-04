import {
  MenuRootItem,
  MenuGroup,
  MenuItem
} from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  {
    id: 'input',
    name: 'INPUTS.COMPONENTS',
    icon: 'input',
    opened: false,
    items: [
      { id: 'inputs', name: 'INPUTS.COMPONENTS', route: '/main/inputs', icon: 'border_color' },
    ]
  },
  {
    id: 'button',
    name: 'BUTTONS',
    icon: 'add_circle',
    opened: false,
    items: [
      { id: 'buttons', name: 'BUTTONS', route: '/main/buttons', icon: 'add_circle' }
    ]
  },
  {
    id: 'data',
    name: 'DATA',
    icon: 'storage',
    opened: false,
    items: [
      { id: 'list', name: 'LIST.COMPONENT', route: '/main/lists', icon: 'list' },
      { id: 'table', name: 'TABLE.COMPONENT', route: '/main/table', icon: 'storage' },
      { id: 'tree', name: 'TREE.COMPONENT', route: '/main/tree', icon: 'call_split' }
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
      { id: 'dialogs', name: 'DIALOG.COMPONENT', route: '/main/dialogs', icon: 'mode_comment' },
      { id: 'snackbar', name: 'SNACKBAR.COMPONENT', route: '/main/snackbar', icon: 'announcement' },
      { id: 'contextmenu', name: 'CONTEXTMENU', route: '/main/contextmenu', icon: 'menu' }
    ]
  }
];
