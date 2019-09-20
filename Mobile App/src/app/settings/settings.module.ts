import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { SharedModule } from "../shared/shared.module";
import { SettingsRoutingModule } from "./settings-routing-module";
import { SettingsComponent } from "./settings.component";



@NgModule({
    declarations: [ 
        SettingsComponent,
    ],
    imports: [NativeScriptCommonModule, SettingsRoutingModule, SharedModule],
    schemas: [NO_ERRORS_SCHEMA]
})

export class SettingsModule {}