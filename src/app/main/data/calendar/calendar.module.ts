import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OCalendarModule } from 'ontimize-web-ngx-extra-components';

import { SharedModule } from '../../../shared/shared.module';
import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarStaticDataComponent } from './01.staticdata/calendar-static-data.component';
import { CalendarServiceComponent } from './02.service/calendar-service.component';
import { CalendarDynamicComponent } from './03.dynamic/calendar-dynamic.component';
import { CalendarTemplatesComponent } from './04.templates/calendar-templates.component';
import { CalendarEventsComponent } from './05.events/calendar-events.component';
import { CalendarEventsService } from '../../../shared/services/calendar-events.service';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    CalendarRoutingModule,
    OCalendarModule,
    CalendarComponent,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatToolbarModule
  ],
  declarations: [
    CalendarStaticDataComponent,
    CalendarServiceComponent,
    CalendarDynamicComponent,
    CalendarTemplatesComponent,
    CalendarEventsComponent
  ],
  providers: [
    { provide: 'events', useValue: CalendarEventsService }
  ]
})
export class CalendarModule { }
