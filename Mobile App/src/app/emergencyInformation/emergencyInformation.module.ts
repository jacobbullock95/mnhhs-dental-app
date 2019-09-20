import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { SharedModule } from "../shared/shared.module";
import { EmergencyInformationRoutingModule } from "./emergencyInformation-routing-module";
import { EmergencyInformationComponent } from "./emergencyInformation.component";



@NgModule({
    declarations: [ 
        EmergencyInformationComponent,
    ],
    imports: [NativeScriptCommonModule, EmergencyInformationRoutingModule, SharedModule],
    schemas: [NO_ERRORS_SCHEMA]
})

export class EmergencyInformationModule {}