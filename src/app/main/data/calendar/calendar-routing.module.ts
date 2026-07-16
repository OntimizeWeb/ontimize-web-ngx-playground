import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarComponent } from './calendar.component';
import { CalendarStaticDataComponent } from './01.staticdata/calendar-static-data.component';
import { CalendarServiceComponent } from './02.service/calendar-service.component';
import { CalendarDynamicComponent } from './03.dynamic/calendar-dynamic.component';
import { CalendarTemplatesComponent } from './04.templates/calendar-templates.component';
import { CalendarEventsComponent } from './05.events/calendar-events.component';

export const routes: Routes = [
  {
    path: '', component: CalendarComponent,
    children: [
      { path: '', redirectTo: 'static-data', pathMatch: 'prefix' },
      { path: 'static-data', component: CalendarStaticDataComponent },
      { path: 'service', component: CalendarServiceComponent },
      { path: 'dynamic', component: CalendarDynamicComponent },
      { path: 'templates', component: CalendarTemplatesComponent },
      { path: 'events', component: CalendarEventsComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
