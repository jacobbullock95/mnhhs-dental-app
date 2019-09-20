import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { SharedModule } from "../shared/shared.module";
import { CalendarRoutingModule } from "./calendar-routing-module";
import { CalendarComponent } from "./calendar.component";
import { CalendarSummaryComponent } from './calendarSummary/calendarSummary.component';



@NgModule({
    declarations: [ 
        CalendarComponent, CalendarSummaryComponent,
    ],
    imports: [NativeScriptCommonModule, CalendarRoutingModule, SharedModule],
    schemas: [NO_ERRORS_SCHEMA]
})

export class CalendarModule {}