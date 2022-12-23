import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'input', name: 'INPUTS.COMPONENTS', icon: 'input', route: '/main/inputs/home' },
  { id: 'button', name: 'BUTTONS', icon: 'add_circle_outline', route: '/main/buttons' },
  {
    id: 'data',
    name: 'DATA',
    icon: 'storage',
    opened: false,
    route: 'main/data/home',
    items: [
      { id: 'grid', name: 'GRID.COMPONENT', route: '/main/data/grid', icon: 'view_module' },
      { id: 'list', name: 'LIST.COMPONENT', route: '/main/data/lists', icon: 'list' },
      { id: 'table', name: 'TABLE.COMPONENT', route: '/main/data/table', icon: 'storage' }
    ]
  },
  {
    id: 'media',
    name: 'MEDIA',
    icon: 'image',
    opened: false,
    route: 'main/media/home',
    items: [
      { id: 'image', name: 'IMAGE.COMPONENT', route: '/main/media/image', icon: 'image' },
      { id: 'gallery', name: 'GALLERY.COMPONENT', route: '/main/media/gallery', icon: 'perm_media' }
    ]
  },
  {
    id: 'layout',
    name: 'LAYOUT',
    icon: 'layers',
    opened: false,
    items: [
      { id: 'layout-manager', name: 'LAYOUT_MANAGER', route: '/main/layout-manager', icon: 'layers' },
      { id: 'containers', name: 'CONTAINERS', route: '/main/containers', icon: 'format_align_center' }
    ]
  },
  {
    id: 'modals',
    name: 'MODALS',
    icon: 'crop_landscape',
    opened: false,
    route: 'main/modals/home',
    items: [
      { id: 'dialogs', name: 'DIALOG.COMPONENT', route: '/main/modals/dialogs', icon: 'mode_comment' },
      { id: 'snackbar', name: 'SNACKBAR.COMPONENT', route: '/main/modals/snackbar', icon: 'announcement' },
      { id: 'contextmenu', name: 'CONTEXTMENU', route: '/main/modals/contextmenu', icon: 'menu' },
      { id: 'tooltip', name: 'TOOLTIP', route: '/main/modals/tooltip', icon: 'mode_comment' }
    ]
  },
  { id: 'about', name: 'ABOUT', route: '/main/about', icon: 'help_outline' }
];
