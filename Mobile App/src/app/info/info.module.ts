import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { SharedModule } from "../shared/shared.module";
import { InfoTabsComponent } from "./info-tabs/info-tabs.component";
import { InfoFullComponent } from "./info-full/info-full.component";
import { InfoSummaryComponent } from "./info-summary/info-summary.component";
import { InfoRoutingModule } from "./info-routing-module";
import { InfoDetailComponent } from "./info-detail/info-detail.component";

//Individual Information Pages
import { InfoHealthyTeethComponent } from "./info-healthyTeeth/info-healthyTeeth.component";
import { InfoEmergencyInformationComponent } from "./info-emergencyInformation/info-emergencyInformation.component";
import { InfoMedicareComponent } from "./info-medicare/info-medicare.component";
import { InfoMoreInfoComponent } from "./info-moreInfo/info-moreInfo.component";


@NgModule({
    declarations: [ 
        InfoTabsComponent,
        InfoFullComponent,
        InfoSummaryComponent,
        InfoDetailComponent,
        InfoHealthyTeethComponent,
        InfoEmergencyInformationComponent,
        InfoMedicareComponent,
        InfoMoreInfoComponent,

    ],
    imports: [NativeScriptCommonModule, InfoRoutingModule, SharedModule],
    schemas: [NO_ERRORS_SCHEMA]
})

export class InfoModule {}