import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { SettingsComponent } from "./settings.component";


const routes: Routes = [
  { path: "", component: SettingsComponent },
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class SettingsRoutingModule {}