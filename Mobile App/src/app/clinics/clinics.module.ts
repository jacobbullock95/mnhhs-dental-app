import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { SharedModule } from "../shared/shared.module";
import { ClinicsTabsComponent } from "./clinics-tabs/clinics-tabs.component";
import { ClinicSearchComponent } from "./clinic-search/clinic-search.component";
import { ClinicListComponent } from "./clinic-list/clinic-list.component";
import {ClinicSummaryComponent} from "./clinic-summary/clinic-summary.component";
import { ClinicsRoutingModule } from "./clinics-routing-module";
import { ClinicMapComponent } from "./clinic-map/clinic-map.component";
import { ClinicCurrentLocationComponent } from "./clinic-currentLocation/clinic-currentLocation.component";
import { ClinicSearchByNameComponent } from "./clinic-searchByName/clinic-searchByName.component";



import { registerElement } from "nativescript-angular/element-registry";
registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);


@NgModule({
    declarations: [ 
        ClinicsTabsComponent,
        ClinicSearchComponent,
        ClinicListComponent,
        ClinicSummaryComponent,
        ClinicMapComponent,
        ClinicCurrentLocationComponent,
        ClinicSearchByNameComponent,
    ],
    imports: [NativeScriptCommonModule, ClinicsRoutingModule, SharedModule],
    schemas: [NO_ERRORS_SCHEMA]
})

export class ClinicsModule {}