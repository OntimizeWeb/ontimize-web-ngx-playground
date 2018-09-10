import {
  MenuRootItem,
  MenuGroup,
  MenuItem
} from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'input', name: 'INPUTS.COMPONENTS', icon: 'input', route: '/main/inputs' },
  { id: 'button', name: 'BUTTONS', icon: 'add_circle_outline', route: '/main/buttons' },
  {
    id: 'data',
    name: 'DATA',
    icon: 'storage',
    opened: false,
    items: [
      { id: 'list', name: 'LIST.COMPONENT', route: '/main/lists', icon: 'list' },
      { id: 'grid', name: 'GRID.COMPONENT', route: '/main/grid', icon: 'view_module' },
      { id: 'table', name: 'TABLE.COMPONENT', route: '/main/table', icon: 'storage' }
    ]
  },
  {
    id: 'media',
    name: 'MEDIA',
    icon: 'image',
    opened: false,
    items: [
      { id: 'image', name: 'IMAGE.COMPONENT', route: '/main/media', icon: 'image' }
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
