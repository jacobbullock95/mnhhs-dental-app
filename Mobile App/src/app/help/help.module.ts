import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { SharedModule } from "../shared/shared.module";
import { HelpRoutingModule } from "./help-routing-module";
import { HelpComponent } from "./help.component";



@NgModule({
    declarations: [ 
        HelpComponent,
    ],
    imports: [NativeScriptCommonModule, HelpRoutingModule, SharedModule],
    schemas: [NO_ERRORS_SCHEMA]
})

export class HelpModule {}