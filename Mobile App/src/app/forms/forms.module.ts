import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { SharedModule } from "../shared/shared.module";
import { FormsRoutingModule } from "./forms-routing-module";
import { FormsComponent } from "./forms.component";
import { FormsSummaryComponent } from "./formsSummary/formsSummary.component";
import { ParentConsentFormComponent } from './parentConsentForm/parentConsentForm.component';
import {NativeScriptFormsModule} from "nativescript-angular/forms"
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';


@NgModule({
    declarations: [ 
        FormsComponent, FormsSummaryComponent, ParentConsentFormComponent,
    ],
    imports: [NativeScriptCommonModule, FormsRoutingModule, SharedModule, NativeScriptFormsModule, TNSCheckBoxModule,],
    schemas: [NO_ERRORS_SCHEMA]
})

export class FormsModule {}