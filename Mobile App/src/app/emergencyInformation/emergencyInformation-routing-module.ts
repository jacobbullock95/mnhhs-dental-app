import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { EmergencyInformationComponent } from "./emergencyInformation.component"; //parent


const routes: Routes = [
  { path: "", component: EmergencyInformationComponent },
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class EmergencyInformationRoutingModule {}