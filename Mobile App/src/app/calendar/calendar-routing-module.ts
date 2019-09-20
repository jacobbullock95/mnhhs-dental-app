import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { CalendarComponent } from "./calendar.component"; //parent
import { CalendarSummaryComponent } from "./calendarSummary/calendarSummary.component";


const routes: Routes = [
  { path: "", component: CalendarComponent, 
    children: [
        { path: "", component: CalendarSummaryComponent}
    ]
  },
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class CalendarRoutingModule {}