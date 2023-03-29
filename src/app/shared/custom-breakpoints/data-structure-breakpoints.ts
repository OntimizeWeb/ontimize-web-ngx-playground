import { BREAKPOINT } from '@angular/flex-layout';

const PRINT_BREAKPOINTS = [{
  alias: 'xl.print',
  suffix: 'XlPrint',
  mediaQuery: 'print and (min-width: 1920px)',
  overlapping: false,
  priority: 1001 // Needed if overriding the default print breakpoint
},
{
  alias: 'xs.print',
  suffix: 'XsPrint',
  mediaQuery: 'print and (max-width: 1280px)',
  overlapping: false,
  priority: 1001 // Needed if overriding the default print breakpoint
},
{
  alias: 'm.print',
  suffix: 'MPrint',
  mediaQuery: 'print and (max-width: 1919px) and (min-width: 1281px)',
  overlapping: false,
  priority: 1001 // Needed if overriding the default print breakpoint
}];

export const CustomBreakPointsProvider = {
  provide: BREAKPOINT,
  useValue: PRINT_BREAKPOINTS,
  multi: true
};